"use strict";

var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var messageSchema = _joi["default"].object({
  name: _joi["default"].string().min(2).max(30).required(),
  email: _joi["default"].string().pattern(new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)),
  message: _joi["default"].string().min(10).max(300).required()
});
exports.validateMessage = function (req, res, next) {
  var _messageSchema$valida = messageSchema.validate(req.body),
    error = _messageSchema$valida.error,
    value = _messageSchema$valida.value;
  if (error) {
    var errorMsg;
    if (error.details[0].path[0] === "email") {
      errorMsg = "Invalid email address";
    } else {
      errorMsg = error.details[0].message;
    }
    return res.status(400).send({
      error: errorMsg
    });
  }
  next();
};
//# sourceMappingURL=validateMessage.js.map