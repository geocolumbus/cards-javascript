module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['jest'],
    rules: {
        indent: ['error', 4],
        'no-console': 0,
        semi: [2, 'never'],
        'no-underscore-dangle': 0,
        'no-restricted-syntax': 0,
    },
}
