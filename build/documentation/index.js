"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "MY BRAND",
      version: "1.0.0",
      description: "My brand is a portfolio website which will be used as a personnal branding",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html"
      },
      contact: {
        name: "MY BRAND",
        url: "https://github.com/Emile-SHUMBUSHO/my-brand-be"
      }
    },
    servers: [{
      url: "/"
    }, {
      url: ""
    }],
    components: {
      securitySchemes: {
        BearerToken: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["src/**/*.doc.js"]
};
var swaggerDocs = (0, _swaggerJsdoc["default"])(swaggerOptions);
var _default = swaggerDocs;
exports["default"] = _default;
//# sourceMappingURL=index.js.map