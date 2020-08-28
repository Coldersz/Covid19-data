module.exports = {
  pwa: {
    manifestPath: 'manifest.json',
    themeColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    },
    iconPaths: {
      favicon32: 'img/icons/logo-32x32.png',
      favicon16: 'img/icons/logo-16x16.png',
      appleTouchIcon: 'img/icons/logo.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/logo.png'
    }
  }
};