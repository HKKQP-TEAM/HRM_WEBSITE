module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "rules": {
            "@nab/nab-x/no-restricted-modules-in-mini-apps": "error",
            "@nab/nab-x/no-apploader": "error",
            "@typescript-eslint/no-unused-vars": "error",
            "no-smart-quotes/no-smart-quotes": "error",
            "@typescript-eslint/no-empty-function": "off",
            // turn on errors for missing imports
            "import/no-unresolved": "error",
            "import/default": "off",
            "prettier/prettier": 2,
            "import/order": [
                "error",
                {
                    "groups": [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling"], // Combine parent and sibling together
                        "index"
                    ],
                    "newlines-between": "always"
                }
            ]
        },
    }
}
