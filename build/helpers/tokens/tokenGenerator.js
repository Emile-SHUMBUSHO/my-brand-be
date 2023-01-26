"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
_dotenv["default"].config();

// @param {object} payload the paload to encode the token
// @param {object} expiresIn the expiration time of the token
// @param {string} the generated token
var _default = function _default() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var expiresIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    expiresIn: "1d"
  };
  var isValidPayload = true;
  if (typeof payload === "number") {
    isValidPayload = false;
  } else if (typeof payload === "null") {
    isValidPayload = false;
  } else if (_typeof(payload) === "object" && !Object.keys(payload).length) {
    isValidPayload = false;
  }
  return isValidPayload ? _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY, expiresIn) : null;
};
exports["default"] = _default;
//# sourceMappingURL=tokenGenerator.js.map