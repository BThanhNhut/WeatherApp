module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@common': './src/common',
            '@library': './src/library',
            '@model': './src/model',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@themes': './src/themes',

            '@redux-slice': './src/redux/action-slice',
            '@redux-selector': './src/redux/selector',
            '@redux-action-type': './src/redux/action-type',

            '@listener': './src/common/redux/listener.ts',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
}
