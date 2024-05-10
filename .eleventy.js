const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("src/event/2024-CCRS-VCMconference/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes", /* Relative to "dir.input" folder */
      data: "_data", /* Relative to "dir.input" folder */
      output: "_site"
    }
  }
};