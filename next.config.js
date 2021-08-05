const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  env:{
    NEXT_PUBLIC_STRAPI_URL:process.env.STRAPI_URL,
    NEXTAUTH_URL:process.env.NEXTAUTH_URL
  }
});
