module.exports = {
    collectCoverage: true,
    coverageProvider: 'v8',
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/test/*.(test|spec).(ts|tsx)'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
};
  