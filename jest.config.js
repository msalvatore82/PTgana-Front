module.exports = () => {
  return {
    testEnvironment: "jest-environment-jsdom",
    setupFiles: ["./jest.setup.js"],
    verbose: true,
    moduleNameMapper: {
      "^.+\\.(css|scss|less)$": "<rootDir>/src/utils/CSStest.js",
      "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/test/__mocks__/fileMock.js",
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleFileExtensions: [
      "js",
      "json",
      "jsx",
      "ts",
      "tsx",
      "node"
    ],
    transformIgnorePatterns: [
      "/node_modules/",
      "/public/img/"
    ],

  };
};