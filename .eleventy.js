const Video = require(`./_includes/components/Video.js`);

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addShortcode('Video', Video);
};
