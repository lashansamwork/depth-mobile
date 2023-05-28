export default () => ({
  expo: {
    scheme: 'depth',
    name: 'depth',
    slug: 'depth',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/waves.gif',
      resizeMode: 'cover',
      backgroundColor: '#daefff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#daefff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
      budler: 'metro',
    },
  },
});
