const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.svelte"],

  whitelistPatterns: [/svelte-/, /bg-/],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

const production = process.env.NODE_ENV !== "development";

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer"), ...(production ? [purgecss] : [])],
};
