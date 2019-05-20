module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  testMatch: ['**/*.test.+(ts|tsx|js|jsx)'],
};
