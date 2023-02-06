module.exports = {
  // operation's method
  post: {
    tags: ["Card CRUD operations"],
    description: "Create card",
    operationId: "createCard",
    parameters: [],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/CardInput",
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        schema: {
          $ref: "#/components/schemas/Card",
        },
      },
      // response code
      500: {
        description: "Server error",
      },
      400: {
        description: "Bad request",
      },
    },
  },
};
