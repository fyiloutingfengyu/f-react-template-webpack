module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry',
        modules: false
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    '@babel/plugin-syntax-dynamic-import'
  ]
};
