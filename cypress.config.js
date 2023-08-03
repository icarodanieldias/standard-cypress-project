const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl:'',  URL BASE
    viewportHeight:768,
    viewportWidth:1366,
  },
  fixturesFolder:false,
  video:false
});
