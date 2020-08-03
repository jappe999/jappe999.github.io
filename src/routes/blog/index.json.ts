import posts from "./_posts";
import { Request } from "polka";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
    };
  })
);

export function get(req: Request, res: any) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
