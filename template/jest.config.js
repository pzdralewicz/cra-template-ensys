const path = require('path');

module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.js',
    '**/src/**/*.jsx',
    '**/src/**/*.ts',
    '**/src/**/*.tsx',
  ],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  modulePathIgnorePatterns: [
    'coverage',
    'node_modules',
    'shared',
    'vendor',
    '__mocks__',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assets/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-styled-components'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  }
};
