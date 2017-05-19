exports.config =
{
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    jasmineNodeOpts:
    {
   	  showColors:true,
      isVerbose: true,
      includeStackTrace: true
     },
    multiCapabilities:
    [
      {
        browserName: 'firefox'
      },
      {
        browserName: 'chrome'
      }
    ]

}



//configuration file
//capabilities describes browser to be tested with; defaults to chrome?
//tho chrome might just be the default browser on this system
