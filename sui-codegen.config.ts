import type { SuiCodegenConfig } from "@mysten/codegen";

const config: SuiCodegenConfig = {
    output: "./src/packages",
    generateSummaries: true,
    prune: true,
    packages: [
        {
            package: "@account/extensions",
            path: "../move-framework/packages/extensions",
        },
        {
            package: "@account/protocol",
            path: "../move-framework/packages/protocol",
        },
        {
            package: "@account/actions",
            path: "../move-framework/packages/actions",
        },
    ],
};

export default config;