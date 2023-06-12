module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry',
        modules: false
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': {
          'version': 3,
          'proposals': true
        }
      }
    ],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-class-properties'],
    [
      'import',
      {
        libraryName: 'antd-mobile',
        style: 'css' // `style: true` 会加载 less 文件
      }
    ]
  ]
};
