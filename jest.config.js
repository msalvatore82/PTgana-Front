module.exports = () => {
    return {
      testEnvironment: "jest-environment-jsdom",
      setupFiles: ["./jest.setup.js"],
      verbose: true,
      moduleNameMapper: {
        "^.+\\.(css|scss|less)$": "<rootDir>/src/utils/CSStest.js",
      },
    };
  };