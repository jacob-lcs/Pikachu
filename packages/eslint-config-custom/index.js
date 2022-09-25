module.exports = {
  extends: ["next", "turbo", "prettier", "@emotion"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
