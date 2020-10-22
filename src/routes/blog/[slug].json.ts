import { Request } from "polka";
import { fetchOne } from "../../services/posts";

export const get = async ({ params }: Request, res: any) => {
  const { slug } = params;

  const post = await fetchOne(slug);

  if (post !== undefined) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(post));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
};
