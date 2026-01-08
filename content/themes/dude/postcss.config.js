module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-calc': {},
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: [
          'cssnano-preset-advanced',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
    }),
  },
};
