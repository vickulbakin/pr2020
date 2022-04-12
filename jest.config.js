module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/__tests__/**/*.{js,jsx}', '<rootDir>/**/?(*.)(test).{js,jsx}'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(css|scss)$': '<rootDir>/scripts/jest/cssTransform',
    '^(?!.*\\.(js|jsx|mjs|css|scss|json)$)': '<rootDir>/scripts/jest/fileTransform',
  },
};
