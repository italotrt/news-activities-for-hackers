import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    rootDir: './',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMocks.js',
    },    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/main.tsx',
    ],
    coverageReporters: ['lcov', 'text'],
    coverageDirectory: 'coverage',};

export default config;