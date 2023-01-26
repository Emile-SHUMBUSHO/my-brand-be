"use strict";

var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//stotage engine
var storage = _multer["default"].diskStorage({
  destination: "./uploads/images",
  filename: function filename(req, file, cb) {
    return cb(null, "".concat(file.fieldname, "_").concat(Date.now()).concat(_path["default"].extname(file.originalname)));
  }
});

//upload image
var upload = (0, _multer["default"])({
  storage: storage
});
module.exports = upload;
//# sourceMappingURL=multer.js.map