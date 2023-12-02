const { src, dest } = require("gulp");

// plaginlar
const plumber = require("gulp-plumber");
const newer = require("gulp-newer"); //avval optimiz. bo'lgan fayllarni qayta qilmaydi
const fonter = require("gulp-fonter"); // fontlarni formats: larda render qiladinp
const ttf2woff2 = require("gulp-ttf2woff2"); //zamonaviy browserlarga mos yangicha formatga o'giradi
// konfiguratsiya
const path = require("../../config/path.js");
const app = require("../../config/app.js");

// Fonts otrabotka
const fonts = () => {
  return src(path.fonts.src)
    .pipe(plumber())
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.fonts.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.fonts.dest));
};
module.exports = fonts;
