module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          images: './src/images',
          src: './src',
        },
      },
    ],
  ],
};
