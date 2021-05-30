const inspect = require("util").inspect;

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("inspect", inspect);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "www",
    },
  };
};
