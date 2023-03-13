module.exports = {
    "settings": {
		"react": {
			"version": "detect"
		}
	},
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
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
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react-hooks/rules-of-hooks": "error",
		"react/react-in-jsx-scope": "off",
    }
}