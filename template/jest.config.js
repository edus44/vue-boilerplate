module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue', 'yml'],
  transform: {
    '.*\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.ya?ml$': '<rootDir>/node_modules/yaml-jest',
    '.*\\.vue$': '<rootDir>/node_modules/jest-vue-preprocessor',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@helpers/(.*)$': '<rootDir>/test/helpers/$1',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupTestFrameworkScriptFile: './test/helpers/setup.js',
  coverageReporters: ['html'],
  collectCoverageFrom: ['src/**/*.{js,vue}'],
}
