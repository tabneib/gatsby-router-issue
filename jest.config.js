// tslint:disable
module.exports = {
    globals: {
        __PATH_PREFIX__: ``
    },
    moduleNameMapper: {
        ".+\\.(svg|png|jpg|css|styl|less|sass|scss)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    roots: ["<rootDir>/src"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    setupFilesAfterEnv: ["<rootDir>/setup-test-env.ts"]
};
