module.exports = {
  pwa: {
    manifestOptions: {
      background_color: "#FFFFFF"
    },
    themeColor: "#9F7AEA",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
};