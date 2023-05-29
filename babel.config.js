module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      'expo-router/babel',
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            app: './app',
            '@/assets': './assets',
            '@/client': './app/client',
            '@/components': './app/components',
            '@/constants': './app/constants',
            '@/context': './app/context',
            '@/messages': './app/messages',
            '@/screens': './app/screens',
            '@/utils': './app/utils',
          },
        },
      ],
    ],
  };
};
