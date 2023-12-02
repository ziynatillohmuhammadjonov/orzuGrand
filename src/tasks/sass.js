const { src, dest } = require("gulp");

// plaginlar
const plumber = require("gulp-plumber");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const autoperifixer = require("gulp-autoprefixer"); //package jsonga "browserslist":["last 3 version"] qoshib ishlatiladi @8.0.0
const sourcemeps = require("gulp-sourcemaps"); //cssni qaysi fayldan export qilinganligini aytadi
const csso = require("gulp-csso"); //cssni minifikatsaiya qiladi
const rename = require("gulp-rename"); //faylni nomini o'zgartirish uchun ishaltiladi
const shorthand = require("gulp-shorthand"); //qisartiradi stillarni agar qo'llab quvatlasa
const groupMediaQueries = require("gulp-group-css-media-queries"); //,media querylani olishda gruppalahs uchun xizmat qiladi
const concat = require("gulp-concat"); // fayllarni birlashtiradi
const webpCss = require("gulp-webp-css"); //webp rasmlarni o'qish kodin o'zi qilib beradi
// Konfiguratsiya
const path = require("../../config/path.js");

// Scss otrabotka
const scss = (cb) => {
  return (
    src(path.scss.src)
      .pipe(plumber())
      .pipe(sassGlob())
      .pipe(sass())
      // .pipe(webpCss())
      .pipe(concat("main.css"))
      .pipe(sourcemeps.init())
      // .pipe(shorthand())
      .pipe(groupMediaQueries())
      .pipe(autoperifixer())
      .pipe(dest(path.scss.dest))
      .pipe(sourcemeps.write())
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(csso())
      .pipe(dest(path.scss.dest)),
    cb()
  );
};
module.exports = scss;
