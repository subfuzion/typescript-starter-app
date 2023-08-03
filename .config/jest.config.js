const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["../build/"],
    coveragePathIgnorePatterns: ["../build/"],
    rootDir: "..",
    roots: ["<rootDir>/src", "<rootDir>/test"],
    modulePaths: ["<rootDir>/src", "<rootDir>/test"],
    moduleNameMapperxxxr: pathsToModuleNameMapper(compilerOptions.paths),
    moduleNameMapper: {
        "^src/(.*)$": "<rootDir>/src/$1",
    },
};
