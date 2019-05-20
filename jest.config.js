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
  testMatch: ['**/__tests__/*.+(ts|tsx|js|jsx)'],
};
