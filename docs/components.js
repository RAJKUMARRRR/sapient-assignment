module.exports = {
  components: {
    schemas: {
      // card model
      Card: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The auto-generated id of the card",
            example: "63e048dc7eac49b9b92444c9",
          },
          name: {
            type: "string",
            description: "The name of the card holder",
            example: "John",
          },
          cardNumber: {
            type: "string",
            description: "Credit Card number",
            example: "4485275742308327",
          },
          limit: {
            type: "number",
            description: "Card Limit",
            example: 5000,
          },
          balance: {
            type: "number",
            description: "Card Balance",
            example: 500,
          },
        },
      },
      // Card input model
      CardInput: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the card holder",
            example: "John",
          },
          cardNumber: {
            type: "string",
            description: "Credit Card number",
            example: "4485275742308327",
          },
          limit: {
            type: "number",
            description: "Card Limit",
            example: 5000,
          },
        },
      },
    },
  },
};
