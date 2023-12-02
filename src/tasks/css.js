const { src, dest } = require("gulp");

// plaginlar
const plumber = require("gulp-plumber");
const concat = require("gulp-concat"); //fayllarni birlashtiradi barchasini
const cssimport = require("gulp-cssimport"); //css import qilishni ta'minlaydi
const autoperifixer = require("gulp-autoprefixer"); //package jsonga "browserslist":["last 3 version"] qoshib ishlatiladi @8.0.0
const sourcemeps = require("gulp-sourcemaps"); //cssni qaysi fayldan export qilinganligini aytadi
const csso = require("gulp-csso"); //cssni minifikatsaiya qiladi
const rename = require("gulp-rename"); //faylni nomini o'zgartirish uchun ishaltiladi
const shorthand = require("gulp-shorthand"); //qisartiradi stillarni agar qo'llab quvatlasa
const groupMediaQueries = require("gulp-group-css-media-queries"); //,media querylani olishda gruppalahs uchun xizmat qiladi
const webpCss = require("gulp-webp-css");
// konfiguratsiya
const path = require("../../config/path.js");
const app = require("../../config/app.js");

// Css otrabotka
const css = () => {
  return src(path.css.src)
    .pipe(plumber())
    .pipe(sourcemeps.init())
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(shorthand())
    .pipe(groupMediaQueries())
    .pipe(autoperifixer())
    .pipe(dest(path.css.dest))
    .pipe(sourcemeps.write())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(csso())
    .pipe(dest(path.css.dest));
};
module.exports = css;
