exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
// ^talks directly to browser.
  onPrepare: function() {
    browser.ignoreSynchronization = true;
//ignore angular
    by.addLocator('valueBind', function (bindingModel, opt_parentElement) {
      var using = opt_parentElement || document;
      var matches = using.querySelectorAll('*[value\\.bind="' + bindingModel +'"]');
      var result = undefined;
//looks for Aurelia value binding
      if (matches.length === 0) {
        result = null;
      } else if (matches.length === 1) {
        result = matches[0];
      } else {
        result = matches;
      }

      return result;
    });
},

  //seleniumAddress: 'http://0.0.0.0:4444',
  //add proper version number
  seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
  specs: ['specs/e2e/dist/*.js'],
// path for soec files
  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
