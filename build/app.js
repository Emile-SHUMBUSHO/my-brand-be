"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _routes = _interopRequireDefault(require("./routes"));
require("dotenv/config");
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _documentation = _interopRequireDefault(require("./documentation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());

//Connect to DB
_mongoose["default"].set("strictQuery", false);
_mongoose["default"].connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true
}, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to DB");
  }
});
app.use("/", _routes["default"]);

// api documentation
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_documentation["default"]));
module.exports = app;
//# sourceMappingURL=app.js.map