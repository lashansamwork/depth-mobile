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
            '@/screens': './app/screens',
            '@/constants': './app/constants',
            '@/client': './app/client',
            '@/components': './app/components',
          },
        },
      ],
    ],
  };
};
