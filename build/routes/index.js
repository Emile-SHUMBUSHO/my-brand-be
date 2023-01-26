"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _blog = _interopRequireDefault(require("./blog"));
var _message = _interopRequireDefault(require("./message"));
var _auth = _interopRequireDefault(require("./auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.use('/', _blog["default"]);
router.use('/', _message["default"]);
router.use('/auth', _auth["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map