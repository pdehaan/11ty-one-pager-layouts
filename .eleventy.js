module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection("sortedSections", (collectionApi) => {
    // https://www.11ty.dev/docs/collections/
    return collectionApi
      // Get all pages w/ a "section" tag (see ./src/pages/pages.json).
      .getFilteredByTag("section")
      // Sort in ascending order.
      .sort((a, b) => a.data?.order - b.data?.order);
  });

  eleventyConfig.addFilter("inspect", require("util").inspect);

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "www",
    },
    markdownTemplateEngine: "njk",
  };
};
