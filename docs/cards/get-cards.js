module.exports = {
    // method of operation
    get: {
      tags: ["Card CRUD operations"],
      description: "Get cards",
      operationId: "getCards",
      parameters: [],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Cards were obtained",
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Card",
              },
            },
          },
        },
      },
    },
  };