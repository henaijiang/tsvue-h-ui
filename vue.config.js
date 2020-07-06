const webpack = require('webpack')
module.exports = {
  lintOnSave: false,
  parallel: false,
  productionSourceMap: false,
  chainWebpack: (config) => {
    /* 修改入口文件 */
    config
    .entry("app")
    .clear()
    .add("./src/index.ts");

    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader")
      .tap(options => {
        options.transpileOnly = false;
        return options;
      });

    config.module
      .rule("tsx")
      .use("ts-loader")
      .loader("ts-loader")
      .tap(options => {
        options.transpileOnly = false;
        return options;
      });

    /* 移除 cache-loader，使之生成类型定义文件 */
    config.module.rule("ts").uses.delete("cache-loader");
    config.module.rule("tsx").uses.delete("cache-loader");
  }
}