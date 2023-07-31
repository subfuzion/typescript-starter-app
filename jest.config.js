const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    //     transform: {
    //         "^.+\\.(t|j)sx?$": "@swc/jest",
    //     },
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["build/"],
    coveragePathIgnorePatterns: ["build/"],
    //     moduleNameMapper: {
    //         "^@/(.*)$": "<rootDir>/src/$1",
    //     },
    roots: ["<rootDir>"],
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
