exports.config =
{
  directConnect: true;
  framework: 'jasmine',
  // seleniumAddress : 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  jasmineNodeOpts:
  {
    showColors:true,
    // isVerbose: true
    // includeStackTrace: true
  },
  multiCapabilities:
  [
    {
      browserName: 'firefox'
    },
    {
      browserName:'chrome'
    }
  ]

}
