module.exports = function (config) {
    config.set({
        mutate: ['src/Controller/addTodoController.js'], // here we define which files we want to be mutated
        testFramework: 'jasmine',
        /*files: [ // all files that are to be mutated and all tests must be included
            'src/Components/!**!/!*.js',
            'test/!**!/!*.js'
        ],*/
        testRunner: 'karma',
        karmaConfigFile: 'karma.conf.js',
        reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
        coverageAnalysis: 'off',
        plugins: ['stryker-karma-runner', 'stryker-html-reporter']
    });
}