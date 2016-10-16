module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "eol-last": ["error", "never"],
        "indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-single"],
        "keyword-spacing": ["error", { "after": true }],
        "linebreak-style": ["error", "unix"],
        "no-cond-assign": ["error", "always"],
        "no-console": ["error", { allow: ["warn", "error", "log"] }],
        "quotes": ["error", "single"],
        "react/jsx-space-before-closing": ["error", "never"],
        "react/jsx-indent": ["error", 4],
        "semi": ["error", "always"]
    }
};