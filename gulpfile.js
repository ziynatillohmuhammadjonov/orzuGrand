const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// konfiguratsiya
const path = require("./config/path.js");
// tasks
const html = require("./src/tasks/html.js");
const clear = require("./src/tasks/clear.js");
const css = require("./src/tasks/css.js");
const scss = require("./src/tasks/sass.js");
const js = require("./src/tasks/js.js");
const img = require("./src/tasks/img.js");
const fonts = require("./src/tasks/fonts.js");

// Liveserver
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// nablyudatel
const watcher = () => {
  watch(path.html.src, html).on("all", browserSync.reload);
  watch(path.scss.src, scss).on("all", browserSync.reload);
  watch(path.js.src, js).on("all", browserSync.reload);
  watch(path.img.src, img).on("all", browserSync.reload);
  watch(path.fonts.src, fonts).on("all", browserSync.reload);
};

const build = series(clear, parallel(html, scss, js, img, fonts));
const dev = series(build, parallel(watcher, server));
// zadachi
exports.server = server;
exports.html = html;
exports.watcher = watcher;
exports.clear = clear;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.css = css;

// Sborka
exports.build = build;
exports.dev = dev;
console.log(process.argv);
