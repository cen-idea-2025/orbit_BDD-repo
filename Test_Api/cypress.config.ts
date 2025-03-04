import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"https://virtserver.swaggerhub.com/devopsassignmentorg/assignment-api/1.0.0",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
