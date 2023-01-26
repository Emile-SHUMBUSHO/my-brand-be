"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _blog = require("../../controller/blog");
var _verifyToken = require("../../middlewares/verifyToken");
var _multer = _interopRequireDefault(require("../../middlewares/multer"));
var _validateBlog = require("../../middlewares/validateBlog");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post("/createBlog", _verifyToken.verifyToken, _multer["default"].single("image"), _validateBlog.validateBlog, _validateBlog.validateUniqueBlog, _blog.createBlog);
router.get("/blogs", _blog.allBlogs);
router.get("/blogs/:id", _blog.singleBlog);
router.put("/blogs/:id", _verifyToken.verifyToken, _multer["default"].single("image"), _blog.updateBlog);
router["delete"]("/blogs/:id", _verifyToken.verifyToken, _blog.deleteBlog);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map