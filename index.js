module.exports = {
    extends: 'airbnb',
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
        jsx: true
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'no-underscore-dangle': 0,
        'padded-blocks': ['error', 'never'],
        'max-len': [0, 120],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        camelcase: [0, { properties: 'never' }]
    },
    env: {
        browser: true,
        mocha: true,
        node: true
    }
};
