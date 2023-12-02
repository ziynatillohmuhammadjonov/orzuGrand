const del = require("del");

// Konfiguratsiya
const path = require("../../config/path.js");

// Cler path
const clear = () => {
  return del(path.root);
};
module.exports = clear;
