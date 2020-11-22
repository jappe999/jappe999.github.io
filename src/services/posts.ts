import { readdirSync, readFileSync } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import marked from "marked";
import { highlight, registerLanguage } from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";

registerLanguage("xml", xml);
registerLanguage("css", css);
registerLanguage("scss", scss);
registerLanguage("typescript", typescript);
registerLanguage("javascript", javascript);
registerLanguage("php", php);

/**
 * Fetch all posts.
 */
export const fetchAll = () =>
  readdirSync("content").map((fileName) => {
    const post = getPost(fileName);
    return grayMatter(post).data;
  });

/**
 * Fetch the metadata and html of a markdown file.
 * @param slug Name of the markdown file
 */
export const fetchOne = (
  slug: string
): { html: string; data: { [key: string]: any } } => {
  // Get the markdown file contents.
  const post = getPost(slug);

  // Set up a custom render with
  // highlight.js for code highlighting.
  const renderer = new marked.Renderer();
  renderer.code = highlightCode;

  // Transform the markdown into metadata and html.
  const { data, content } = grayMatter(post);
  const html = marked(content, { renderer });

  return { html, data };
};

export const getPost = (fileName: string) =>
  readFileSync(path.resolve("content", fileName), "utf-8");

/**
 * Highlight code with highlight.js
 * @param source The source contents
 * @param lang A language supported by highlight.js
 */
export const highlightCode = (source: string, lang: string) => {
  const { value: highlighted } = highlight(lang, source);
  return `<pre><code class='hljs ${lang}'>${highlighted}</code></pre>`;
};
