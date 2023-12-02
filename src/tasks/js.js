const { src, dest } = require("gulp");

// plaginlar
const plumber = require("gulp-plumber");
const babel = require("gulp-babel"); //babelni sozlash packagesjon filega: "babel": {
//   "presets": [
//     "@babel/preset-env"
//   ]
// }, ni sozlasha kerak
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const gulpif = require("gulp-if");
// konfiguratsiya
const path = require("../../config/path.js");
const app = require("../../config/app.js");

// Js otrabotka
const js = () => {
  return (
    src(path.js.src)
      .pipe(plumber())
      .pipe(babel())
      .pipe(concat("main.js"))
      .pipe(gulpif(app.isProd, uglify()))
      // .pipe(
      //   webpack({
      //     mode: "development",
      //   })
      // )
      .pipe(dest(path.js.dest))
  );
};
module.exports = js;
