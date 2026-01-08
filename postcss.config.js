module.exports = {
  plugins: {
    'postcss-url': {
      url: 'rebase',
    },
    autoprefixer: {},
    'postcss-calc': {},
    'postcss-colormin': {},
    'postcss-discard-empty': {},
    'postcss-merge-longhand': {},
    'postcss-merge-rules': {},
    'postcss-minify-font-values': {},
    'postcss-minify-gradients': {},
    'postcss-normalize-positions': {},
    'postcss-normalize-url': {},
    'postcss-unique-selectors': {},
    'postcss-zindex': {},
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
