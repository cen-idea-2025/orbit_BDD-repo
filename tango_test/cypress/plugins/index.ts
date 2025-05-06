const cucumber = require("cypress-require-preprocessor");
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on: any, config: any) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };

  on("file:preprocessor", cucumber(options));
};
