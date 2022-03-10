module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.svg'],
        alias: {
          '~assets': './src/assets',
          '~components': './src/components',
          '~containers': './src/containers',
          '~config': './src/config',
          '~screens': './src/screens',
          '~redux': './src/redux',
          '~services': './src/services',
          '~navigation': './src/navigation',
          '~helpers': './src/helpers',
          '~types': './src/types',
          '~hooks': './src/hooks',
          '~utils': './src/utils',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
