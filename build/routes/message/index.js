"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _message = require("../../controller/message");
var _verifyToken = require("../../middlewares/verifyToken");
var _validateMessage = require("../../middlewares/validateMessage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post("/message", _validateMessage.validateMessage, _message.createMessage);
router.get("/all-message", _verifyToken.verifyToken, _message.allMessages);
router["delete"]("/message/:id", _verifyToken.verifyToken, _message.deleteMessage);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map