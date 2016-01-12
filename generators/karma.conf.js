// Karma configuration
// Generated on Tue Jan 12 2016 10:32:43 GMT+0200 (Jerusalem Standard Time)

module.exports = function(config) {
    config.set({

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['jasmine'],


	// list of files / patterns to load in the browser
	files: [
	    'karmalib/angular.min.js',
	    'karmalib/angular-ui-router.js',
	    'karmalib/angular-mocks.js',
	    'karmalib/app.js',
	    '*/templates/*.js',
//	    'page/templates/*.spec.js',
	    '*/templates/*.html'
	],


	// list of files to exclude
	exclude: [
	    'app/templates/*'
	    
	],


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
	    '*/templates/*.js':['babel'],
	    '**/*.html': ['ng-html2js']
	},

	babelPreprocessor:{
	    options:{
		presets:['es2015'],
		sourceMap:'inline'
	    }
	},

	ngHtml2JsPreprocessor: {

	    cacheIdFromPath: function(filepath) {

		// here we take the filepath that exists and return what our app requests
		// ie we take the src/template.html --> build/template.html
		// or ./yo-generator/dir/path/template.html -> ./styleguide/dirpath/template.html
		if(filepath.match(/^page\//)){
		    return 'app/page/'+filepath.match(/\/([A-Za-z0-9\-]*\.html)$/)[1];

		}else if(filepath.match(/^page-component/)){
		    return 'components/page-component/'+filepath.match(/\/([A-Za-z0-9\-]*\.html)$/)[1];

		}else{
		    return 'components/component-name/'+filepath.match(/\/([A-Za-z0-9\-]*\.html)$/)[1];
		}
	    }
	},


	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['progress'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: false,


	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['Chrome'],


	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: true,

	// Concurrency level
	// how many browser should be started simultaneous
	concurrency: Infinity
    })
}
