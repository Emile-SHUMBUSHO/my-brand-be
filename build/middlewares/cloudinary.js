"use strict";

var _cloudinary = _interopRequireDefault(require("cloudinary"));
require("dotenv/config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Configuration
_cloudinary["default"].config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});
module.exports = _cloudinary["default"];
//# sourceMappingURL=cloudinary.js.map