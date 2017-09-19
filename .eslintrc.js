module.exports = {
    "extends": "airbnb",
	"env": {
        "browser": true,
        "node": true,
    },
	"globals": {
        "API": "hello",
    },
	"rules": {
		"react/no-unescaped-entities": 0,
		"max-len": [1, 120, 2, {ignoreComments: true}],
		"react/no-unused-prop-types": [1, {skipShapeProps: true }],
		"no-plusplus": 0,
		"quotes": 0,
		"react/no-array-index-key": 1,
	},
};