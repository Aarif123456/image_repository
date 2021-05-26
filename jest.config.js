module.exports = {
    preset: 'ts-jest',
    testMatch: ['<rootDir>/tests/**/*.test.{ts,tsx}'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/*.d.ts'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy'
    },
    coveragePathIgnorePatterns: ['<rootDir>/src/types/*', '<rootDir>/src/resources/*'],
    coverageReporters: ['text', 'cobertura', 'html'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    }
};
