import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: true,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "https://cenidea-git-develop-cenidea.vercel.app/",
    video: true,
    experimentalModifyObstructiveThirdPartyCode: true,

    specPattern: "cypress/e2e/feature/**/*.{feature,features}",

    setupNodeEvents(on, config) {
      //implement node event listeners here

      return require("./cypress/plugin/index.ts")(on, config);
    },
  },
});
