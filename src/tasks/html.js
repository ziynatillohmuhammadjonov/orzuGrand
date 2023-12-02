const { src, dest } = require("gulp");

// plaginlar
const gp = require("gulp-load-plugins")(); //barcha gulp plaginlarni o'zi avtomatik qo'yadi
// const fileInclude = require("gulp-file-include");
// const plumber = require("gulp-plumber");
// const htmlmin = require("gulp-htmlmin");
// const webpHTML = require("gulp-webp-html"); //webpni kodini o'zi yozib beradigan pack

// konfiguratsiya
const path = require("../../config/path.js");
const app = require("../../config/app.js");

// HTML otrabotka
const html = () => {
  return (
    src(path.html.src)
      .pipe(gp.plumber())
      .pipe(gp.fileInclude(app.htmlmin))
      // .pipe(gp.webpHtml())
      .pipe(gp.htmlmin())
      .pipe(dest(path.html.dest))
  );
};
module.exports = html;
