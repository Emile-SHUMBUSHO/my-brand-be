"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = require("../../controller/auth");
var _authValidation = require("../../middlewares/authValidation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post("/signup", _authValidation.validateSignUp, _authValidation.validateUniqueUser, _auth.signupController);
router.post("/login", _auth.loginController);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map