
http://aurelia.io/hub.html#/doc/article/aurelia/testing/latest/end-to-end-testing/9
http://blog.aurelia.io/2015/02/16/end-to-end-testing-with-aurelia-and-protractor/

starting babel:

  npm run babel

  watches files in src for changes, translates to es5 in building



run webdriver, leave it running
  webdriver-manager start


run protractor:

  protractor conf.js


Note: you'll have to either:

  A) throw all tests in one file
  B) Find a way to run what ever spec files exist (Should be some code for this)


Protractor seems to have support for some es6 functionality like
  =>
  let
  etc

  But it can't create classes by default it seems

Issues

  -getting firefox to run
  -getting protractor plugin working

Alternative
  -keep es6 and babel, but disregard aurelia plugin
  its not that useful and there's no documentation.
  
