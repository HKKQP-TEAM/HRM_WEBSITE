module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node':true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'prettier',
        'no-smart-quotes',
    ],
    'rules': {
            '@typescript-eslint/no-unused-vars': 'error',
            'react/react-in-jsx-scope': 'off',
            'camelcase': 'error',
            'no-duplicate-imports': 'error',
            'no-unused-vars': 'off',
            'no-smart-quotes/no-smart-quotes': 'error',
            '@typescript-eslint/no-empty-function': 'off',
            // turn on errors for missing imports
            'import/default': 'off',
    }
}