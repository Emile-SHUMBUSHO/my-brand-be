import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "MY BRAND",
      version: "1.0.0",
      description: "My brand is a portfolio website which will be used as a personnal branding",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "MY BRAND",
        url: "https://github.com/Emile-SHUMBUSHO/my-brand-be",
      },
    },
    servers: [
      {
        url: "/",
      },
      {
        url: "",
      },
    ],
    components: {
      securitySchemes: {
        BearerToken: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["src/**/*.doc.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;