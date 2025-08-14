import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,

  env: {
    //username: "ebukafrank",
  },
  e2e: {
    baseUrl: "https://cenidea-git-develop-cenidea.vercel.app/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
