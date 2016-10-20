module.exports = {
    'extends': 'airbnb',
    'plugins': [
        'react',
        'jsx-a11y',
        'import'
    ],
    'rules': {
        'arrow-body-style': ['off'],
        'comma-dangle': ['off'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'default-case': 'off',
        'eol-last': ['off'],
        'eqeqeq': 'off',
        'import/prefer-default-export': ['off'],
        'class-methods-use-this': ['off'],
        'indent': ['error', 4],
        'jsx-quotes': ['error', 'prefer-single'],
        'keyword-spacing': ['error', { 'after': true }],
        'linebreak-style': ['error', 'unix'],
        'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
        'no-undef': 'off',
        'no-useless-constructor': 'off',
        'quotes': ['error', 'single'],
        'react/jsx-filename-extension': ['off'],
        'react/jsx-space-before-closing': ['off'],
        'prefer-template': ['off'],
        'react/prop-types': ['off'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/self-closing-comp': ['warn'],
        'semi': ['error', 'always'],
        'spaced-comment': ['off']
    }
};