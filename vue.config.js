module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "IPM Group 23";
      return args;
    });
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/ipmGroup23_website/" : "/",
};
