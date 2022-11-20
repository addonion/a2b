const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};

/** SASS compiler */
const sassOptions = {
  includePaths: [path.join(__dirname, "styles")],
};

(module.exports = nextConfig), sassOptions;
