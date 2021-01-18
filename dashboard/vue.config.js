module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .tap(args => {
          args['resolve'] = {
            alias: {
              vue$: "vue/dist/vue.runtime.esm.js",
            },
            extensions: ["*", ".js", ".vue", ".json"],
          }
          return args
        })
  }
}
