"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BlogSchema = _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  blogBody: {
    type: String,
    required: true
  },
  blogImage: {
    type: String,
    require: false
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
var _default = _mongoose["default"].model("Blog", BlogSchema);
exports["default"] = _default;
//# sourceMappingURL=blog.js.map