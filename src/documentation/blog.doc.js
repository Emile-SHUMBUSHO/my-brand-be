/**
 * @openapi
 * 
 * /blogs/createBlog:
 *      post:
 *          security:
 *              - BearerToken: []
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
 *                              description:
 *                                  type: string
 *                              blogBody:
 *                                  type: string
 *                              imageUrl:
 *                                  type: string
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
 * 
 * 
 * /blogs:
 *      get:
 *          tags: [Blog]
 *          summary: This request list all blogs from database
 *          description: List all blogs
 * 
 *          responses:
 *                  200:
 *                      description: Blogs retrieved successfully
 * 
 * /blogs/{id}:
 *      get:
 *          tags: [Blog]
 *          summary: This request list a single blog
 *          description: List a blog
 *          parameters:
 *            - name: id
 *              in: path
 *              description: Provide a blog id
 *              required: true
 *          responses:
 *                  200:
 *                      description: A blog retrieved successfully
 * 
 * /blogs/delete/{id}:
 *      delete:
 *              security:
 *                  - BearerToken: []
 *              tags: [Blog]
 *              summary: This request will delete a blog
 *              description: Delete a blog
 *              parameters:
 *                - name: id
 *                  in: path
 *                  description: Provide a blog id
 *                  required: true
 *              responses:
 *                      200:
 *                          description: A blog deleted successfully
 */
