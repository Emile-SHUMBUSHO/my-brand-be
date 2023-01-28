/**
 * @openapi
 * 
 * /:
 *      post:
 *          tags: [Blog]
 *          summary: This helps to create a blog. 
 *          description: Fill out all required inputs.
 *          requestBody:
 *              description: Provide blog details
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              title:
 *                                  type: string
 *                                  required: true
 *                              description:
 *                                  type: string
 *                                  required: true
 *                              blogBody:
 *                                  type: string
 *                                  required: true
 *                              blogImage:
 *                                  type: string
 *                                  required: false
 * 
 * 
 *          responses:
 *                  201:
 *                     description: blog created successfully!
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 */
"use strict";
//# sourceMappingURL=blog.doc.js.map