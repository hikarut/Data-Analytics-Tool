module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
    'vue/max-attributes-per-line': ['error', {
      'singleline': 4,
      'multiline': {
        'max': 3,
        'allowFirstLine': true
      },
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'prettier/prettier': ['error', {
      'printWidth': 80
    }],
    'vue/no-parsing-error': 'off',  // この行を追加してエラールールを無効化
    'vue/html-closing-bracket-newline': 'off',  // この行を追加
    'vue/no-parsing-error': 'off',
  }
}
