const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

const plugins = [
  tailwindcss("./tailwind.config.js"),
  cssnano({
    preset: "default"
  })
];

console.log(process.env.ENVIRONMENT);
if (process.env.ENVIRONMENT !== "DEVELOPMENT") {
  plugins.push(
    purgecss({
      content: [
        "./src/**/*.html",
        "./src/**/*.vue",
        "./src/**/*.js",
        "./src/**/**/*.js",
        "./src/*.js"
      ]
    })
  );
}

plugins.push(autoprefixer);
module.exports = {
  plugins: plugins
};
