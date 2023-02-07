module.exports = {
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/static/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: false,
  testEnvironment: 'jsdom',
}
