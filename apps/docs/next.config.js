const withTM = require("next-transpile-modules")(["animation-render", "animation-editor"]);

module.exports = withTM({
  reactStrictMode: true,
});
