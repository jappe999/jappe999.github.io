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
const RAW_GITHUB_URL = `https://raw.githubusercontent.com/jappe999/${GITHUB_BLOG_REPO}/${GITHUB_MAIN_BRANCH}`;
const lookup = new Map<string, Post>();

const CACHING_TIME = 86400; // One day
let lastTimeChecked = Date.now();

function needsUpdate(): boolean {
  return lookup.size === 0 || Date.now() - CACHING_TIME > lastTimeChecked;
}

/**
 * Fetch a list of files without their contents.
 */
export async function fetchAll(forceUpdate = false) {
  if (!needsUpdate() && !forceUpdate) {
    return Array.from(lookup.values());
  }

  lastTimeChecked = Date.now();

  const { tree }: GithubResponse = await fetch(
    `${GITHUB_BLOG_URL}/trees/${GITHUB_MAIN_BRANCH}`
  ).then((r) => r.json());

  await parseTree(tree);

  return Array.from(lookup.values());
}

/**
 * Fetch a single blog post.
 * @param slug The slug of the blog post
 */
export function fetchOne(slug: string): Post {
  return lookup.get(slug);
}

async function fetchFile(sha: string) {
  return fetch(`${GITHUB_BLOG_URL}/blobs/${sha}`).then((r) => r.json());
}

async function parseTree(tree: Array<{ sha: string; path: string }>) {
  for (const { sha, path } of tree) {
    const title = path.replace(/\.(md|gif|png|svg|jpe?g)$/gi, "");
    const slug = title.replace(" ", "-");
    const post = getPost(slug);

    if (path.endsWith(".md")) {
      post.id = sha;
      post.title = title;

      await getContent(post);
    }

    if (path.match(/\.(gif|png|svg|jpe?g)$/gi))
      post.thumbnail = `${RAW_GITHUB_URL}/${path}`;

    lookup.set(slug, post);
  }
}

/**
 * Get a post from memory or a stand-in.
 * @param slug The slug in the url
 */
function getPost(slug: string) {
  return (
    lookup.get(slug) ?? {
      id: "",
      title: "",
      slug,
      content: "",
      thumbnail: "",
    }
  );
}

async function getContent(post: Post) {
  const response = await fetchFile(post.id).then((file) => ({
    ...file,
    content: Buffer.from(file.content, "base64").toString("utf-8"),
  }));

  post.content = marked(response.content);

  lookup.set(post.slug, post);
}
