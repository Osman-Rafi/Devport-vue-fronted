module.exports = {
  devServer: {
    port: process.env.VUE_APP_DEV_PORT,
    proxy: process.env.VUE_APP_API_ROOT_PATH,
  },
};
