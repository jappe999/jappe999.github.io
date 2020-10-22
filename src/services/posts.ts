import fetch from "node-fetch";
import marked from "marked";

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
};

export type GithubResponse = {
  tree: Array<{
    sha: string;
    path: string;
  }>;
};

const GITHUB_BLOG_REPO = process.env.GITHUB_BLOG_REPO ?? "blog-posts";
const GITHUB_BLOG_URL =
  process.env.GITHUB_BLOG_URL ??
  `https://api.github.com/repos/jappe999/${GITHUB_BLOG_REPO}/git`;
const GITHUB_MAIN_BRANCH = process.env.GITHUB_MAIN_BRANCH ?? "main";
const lookup = new Map<string, Post>();

const CACHING_TIME = 86400; // One day
let lastTimeChecked = Date.now();

function needsUpdate(): boolean {
  return Date.now() - CACHING_TIME > lastTimeChecked;
}

/**
 * Fetch a list of files without their contents.
 */
export async function fetchAll() {
  if (lookup.size > 0 && !needsUpdate()) {
    return Array.from(lookup.values());
  }

  lastTimeChecked = Date.now();

  const { tree }: GithubResponse = await fetch(
    `${GITHUB_BLOG_URL}/trees/${GITHUB_MAIN_BRANCH}`
  ).then((r) => r.json());

  for (const { sha, path } of tree) {
    if (!path.match(/\.(md|gif|png|svg|jpe?g)$/gi)) return;

    const slug = path
      .replace(/\.(md|gif|png|svg|jpe?g)$/gi, "")
      .replace(" ", "-");

    if (!lookup.get(slug)) {
      const post: Post = {
        id: sha,
        title: path.replace(/\.(md|gif|png|svg|jpe?g)$/gi, ""),
        slug,
        content: "",
        thumbnail: "",
      };

      lookup.set(slug, post);
    }

    if (path.match(/\.(gif|png|svg|jpe?g)$/gi)) {
      const post = lookup.get(slug);

      post.thumbnail = (await fetchFile(sha)).content;

      lookup.set(slug, post);
    }
  }

  return Array.from(lookup.values());
}

/**
 * Fetch a single blog post.
 * @param slug The slug of the blog post
 */
export async function fetchOne(slug: string): Promise<Post> {
  let post = lookup.get(slug);

  if (!post) {
    await fetchAll();
    return fetchOne(slug);
  } else if (!post.content) {
    const response = await fetchFile(post.id).then((file) => ({
      ...file,
      content: Buffer.from(file.content, "base64").toString("utf-8"),
    }));

    post.content = marked(response.content);

    lookup.set(slug, post);
  }

  return post;
}

async function fetchFile(sha: string) {
  return fetch(`${GITHUB_BLOG_URL}/blobs/${sha}`).then((r) => r.json());
}
