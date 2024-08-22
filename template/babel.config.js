module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@custom-ui': './src/utils/components/ui',
          '@theme': './src/utils/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
