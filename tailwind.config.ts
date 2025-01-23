const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
