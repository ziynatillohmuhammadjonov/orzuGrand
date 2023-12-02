const { src, dest } = require("gulp");

// plaginlar
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin"); //rasmlarni optimizatsiya qilish uchun ishalatiladi
const newer = require("gulp-newer"); //avval optimiz. bo'lgan fayllarni qayta qilmaydi
const webp = require("gulp-webp"); //google tomonidan ishalb chiqarilgan ras turi, yanada ixchamlashtiradi. Faqat eski brauzerlar uni qo'llab quvatlamaydi
const gulpif = require("gulp-if");
// konfiguratsiya
const path = require("../../config/path.js");
const app = require("../../config/app.js");

// Image otrabotka
const img = () => {
  return src(path.img.src)
    .pipe(plumber())
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest));
};
module.exports = img;
