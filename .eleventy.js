const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("src/event/2024-CCRS-VCMconference/assets");

  eleventyConfig.addCollection("2024-ccrs-vcmconference-speakers", function (collectionApi) {
		return collectionApi
      .getFilteredByTag("2024-ccrs-vcmconference-speakers")
      .sort((a, b) => parseInt(a.data.order, 10) - parseInt(b.data.order, 10));
	});

  eleventyConfig.addFilter("keys", function(value) {
    return JSON.stringify(Object.keys(value));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes", /* Relative to "dir.input" folder */
      data: "_data", /* Relative to "dir.input" folder */
      output: "_site"
    }
  }
};