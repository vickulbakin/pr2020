module.exports = {
  plugins: [
    'postcss-import',
    'postcss-custom-properties',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      'postcss-custom-media',
      {
        importFrom: './src/styles/media.css',
      },
    ],
  ],
};
