const srcPath = "./src";
const destPath = "./public";
module.exports = {
  root: destPath,
  html: {
    src: srcPath + "/html/*.html",
    watch: srcPath + "/html/*.html",
    dest: destPath,
  },
  css: {
    src: [`${srcPath}/css/*.css`, `${srcPath}/css/**/*.css`],
    watch: [`${srcPath}/css/*.css`, `${srcPath}/css/**/*.css`],
    dest: destPath + "/css",
  },
  scss: {
    src: [
      `${srcPath}/scss/*{.scss, .sass}`,
      `${srcPath}/scss/**/*{.scss, .sass}`,
    ],
    watch: [
      `${srcPath}/scss/*{.scss, .sass}`,
      `${srcPath}/scss/**/*{.scss, .sass}`,
    ],
    dest: destPath + "/css",
  },
  js: {
    src: [`${srcPath}/js/*.js`, `${srcPath}/js/**/*.js`],
    watch: [`${srcPath}/js/*.js`, `${srcPath}/js/**/*.js`],
    dest: destPath + "/js",
  },
  img: {
    src: [`${srcPath}/img/*.*`, `${srcPath}/img/**/*.*`],
    watch: [`${srcPath}/img/*.*`, `${srcPath}/img/**/*.*`],
    dest: destPath + "/img",
  },
  fonts: {
    src: [`${srcPath}/fonts/*.*`, `${srcPath}/fonts/**/*.*`],
    watch: [`${srcPath}/fonts/*.*`, `${srcPath}/fonts/**/*.*`],
    dest: destPath + "/fonts",
  },
};
