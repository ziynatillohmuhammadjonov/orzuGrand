const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,
  sourcemaps: true,
  htmlmin: {
    collapseWhitespace: true,
  },
  webpack: {
    mode: "development",
  },
  imagemin: {
    verbose: true,
  },
  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },
};
