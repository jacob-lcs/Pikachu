module.exports = {
  extends: ["turbo", "prettier", "plugin:@typescript-eslint/recommended"],
  plugins: ["@emotion", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/jsx-key": "off",
    "semi": [2, "never"]
  },
  ignorePatterns: ["**/dist/**"]
}
