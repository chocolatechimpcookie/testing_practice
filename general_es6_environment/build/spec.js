"use strict";

describe("Test", function () {
  it('This is a test to test protractor', function () {
    browser.waitForAngularEnabled(false);
    browser.get("https://facebook.github.io/jest/");
    $("#footer").getAttribute("innerHTML").then(function (value) {
      console.log("inside value then");
      console.log(value);
    });

    // var queryse = document.querySelector("#footer").innerHTML;
    var queryse = window.document.querySelector("#footer").innerHTML;

    // var queryse = browser.document.querySelector("#footer").innerHTML;

    console.log('query selector');
    // console.log(queryse);
  });
});