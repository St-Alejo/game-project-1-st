module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    'three': '<rootDir>/node_modules/three',
  }
};
