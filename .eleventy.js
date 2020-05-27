const Video = require(`./_includes/components/Video.js`);

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('Video', Video);
};