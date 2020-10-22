import { Request } from "polka";
import { fetchAll } from "../../services/posts";
// import { fetchPosts } from "./_posts";

export const get = async (req: Request, res: any) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const contents = await fetchAll();

  res.end(JSON.stringify(contents));
};
