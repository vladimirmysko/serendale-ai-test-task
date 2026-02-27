/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "all",
  printWidth: 80,

  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss", // MUST be last
  ],

  // Required for Tailwind v4 (no tailwind.config.js; CSS-first config)
  tailwindStylesheet: "./src/app/globals.css",

  // Import order: React → Next.js → third-party → @/* alias → relative → CSS
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(react-dom/(.*)$)|^(react-dom$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^(?!.*\\.css$)[./].*$",
    "\\.css$",
  ],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};

export default config;
