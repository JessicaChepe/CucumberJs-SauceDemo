module.exports = {
    default: {
        tags: process.env.npm_config_tags || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/features/**/**/*.feature"
        ],
        dryRun: false,
        require: [
            "src/step-definitions/**/**/*.js",
            "src/hooks/**/**/*.js"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:./test-results/reports/cucumber-report.html",
            "json:./test-results/reports/cucumber-report.json"
        ],
        parallel: 1
    }
}