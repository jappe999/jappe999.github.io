import { Request } from "polka";
import { fetchAll } from "../../services/posts";

export const get = (req: Request, res: any) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const contents = fetchAll();

  res.end(JSON.stringify(contents));
};
