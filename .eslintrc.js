module.exports = {
    "extends": ["airbnb", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "rules": {
        "arrow-parens": ["error", "as-needed"],
        "comma-dangle": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-no-bind": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-uses-vars": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/prop-types": 2,
        "semi": 2,
    }
};