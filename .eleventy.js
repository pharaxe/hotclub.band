
module.exports = function(eleventyConfig) {
  // Use markdown-its-attrs
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let options = {    html: true  };  
  let markdownLib = markdownIt(options).use(markdownItAttrs);    
  eleventyConfig.setLibrary("md", markdownLib);
}