module.exports = function(config){
    config.set({
        mutate: ['src/Components/**/*.js', 'src/Controllers/**/*.js', 'src/Directives/**/*.js', 'src/Factories/**/*.js'],
        testFramework: 'jasmine',
        testRunner: 'karma',
        karmaConfigFile: 'karma.conf.js',
        reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
        coverageAnalysis: 'off',
        plugins: ['stryker-karma-runner', 'stryker-html-reporter']
    });
}