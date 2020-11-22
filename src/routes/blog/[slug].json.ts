import { Request } from "polka";
import { fetchOne } from "../../services/posts";

export const get = ({ params }: Request, res: any) => {
  const { slug } = params;
  const { html, data } = fetchOne(`${slug}.md`);

  if (html !== undefined) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
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
