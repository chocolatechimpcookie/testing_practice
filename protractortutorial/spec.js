// describe('Protractor Demo App', function()
// {
//   it('should have a title', function()
//   {
//       browser.get('http://juliemr.github.io/protractor-demo/');
//       expect(browser.getTitle()).toEqual('Super Calculator');
//   });
// });



//The describe and it syntax is from the Jasmine framework. browser is a global
//created by Protractor, which is used for browser-level commands such as
// navigation with browser.get.




// describe('Protractor Demo App', function ()
// {
//   it('should add one and two', function()
//   {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     element(by.model('first')).sendKeys(1);
//     element(by.model('second')).sendKeys(2);
//
//     element(by.id('gobutton')).click();
//
//     expect(element(by.binding('latest')).getText()).
//       toEqual('5');
//       //this is wrong!
//
//   });
// });


// element is used to find elements on the page
  // returns an element finder object which is used to interact or get info from it
  // send keys is used to type into input



// describe('Protractor Demo App', function()
// {
//   var firstNumber = element(by.model('first'));
//   var secondNumber= element(by.model('second'));
//   var goButton = element(by.id('gobutton'));
//   var latestResult = element(by.binding('latest'));
//
//   beforeEach(function()
//   {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//   });
//
//   it('should have a title', function()
//   {
//       expect(browser.getTitle()).toEqual('Super Calculator');
//   });
//
//   it('should add one and two', function()
//   {
//       firstNumber.sendKeys(1);
//       secondNumber.sendKeys(2);
//
//       goButton.click();
//
//       expect(latestResult.getText()).toEqual('3');
//   });
//
//
//   it('should add four and six', function()
//   {
//     firstNumber.sendKeys(4);
//     secondNumber.sendKeys(6);
//
//     goButton.click();
//
//     expect(latestResult.getText()).toEqual('10');
//   });
//
//
// });







// describe('Protractor Demo App', function()
// {
//   var firstNumber = element(by.model('first'));
//   var secondNumber = element(by.model('second'));
//   var goButton = element(by.id('gobutton'));
//   var latestResult = element(by.binding('latest'));
//   var history = element.all(by.repeater('result in memory'));
//   //what this do?
//  // console.log("History ");
//  // console.log(history);
//
//
//   function add(a, b)
//   {
//     firstNumber.sendKeys(a);
//     secondNumber.sendKeys(b);
//     goButton.click();
//   }
//
//   beforeEach(function ()
//   {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//   });
//
//   it('should have a history', function()
//   {
//     add(1,2);
//     add(3,4);
//
//     expect(history.count()).toEqual(2);
//
//     add(5,6);
//
//     expect(history.count()).toEqual(0);
//     //this is wrong!
//   });
//
// });


// We've done a couple things here - first, we created a helper function, add.
// We've added the variable history. We use element.all with the by.repeater
 // Locator to get an ElementArrayFinder. In our spec, we assert that the history
  // has the expected length using the count method.





// describe('Protractor Demo App', function()
// {
//     var firstNumber = element(by.model('first'));
//     var secondNumber = element(by.model('second'));
//     var goButton = element(by.id('gobutton'));
//     var latestResult = element(by.binding('latest'));
//     var history = element.all(by.repeater('result in memory'));
//     //what this do?
//     // console.log("History ");
//     // console.log(history);
//
//
//     function add(a, b)
//     {
//       firstNumber.sendKeys(a);
//       secondNumber.sendKeys(b);
//       goButton.click();
//     }
//
//     beforeEach(function ()
//     {
//       browser.get('http://juliemr.github.io/protractor-demo/');
//     });
//
//     it('should have a history', function()
//     {
//       add(1,2);
//       add(3,4);
//
//       expect(history.last().getText()).toContain('1 + 2');
//       expect(history.first().getText()).toContain('3 + 4');
//       // expect(history.first().getText()).toContain('foo'); //wrong!
//     });
//
// });



// Since the Calculator reports the oldest result at the bottom, the oldest
 // addition (1 + 2) be the last history entry. We're using the toContain
  // Jasmine matcher to assert that the element text contains "1 + 2". The full
  //  element text will also contain the timestamp and the result.









// USING PAGE OBJECTS
// When writing end-to-end tests, a common pattern is to use Page Objects. Page
// Objects help you write cleaner tests by encapsulating information about the
// elements on your application page. A Page Object can be reused across multiple
// tests, and if the template of your application changes, you only need to update
// the Page Object.



// original script

// describe('angularjs homepage', function()
// {
//   it('should greet the named user', function()
//   {
//       browser.get('http://www.angularjs.org');
//       element(by.model('yourName')).sendKeys('Julie');
//       var greeting = element(by.binding('yourName'));
//       expect(greeting.getText()).toEqual('Hello Julie!');
//   });
//
// });






var AngularHomepage = function()
{
  var nameInput = element(by.model('yourName'));
  var greeting = element(by.binding('yourName'));

  this.get = function()
  {
    browser.get('http://www.angularjs.org');
  };

  this.setName = function(name)
  {
    nameInput.sendKeys(name);
  };

  this.getGreeting = function()
  {
    return greeting.getText();
  };
};


describe('angularjs homepage', function()
{
  it('should greet the named user', function()
  {

    var angularHomepage = new AngularHomepage();
    angularHomepage.get();

    angularHomepage.setName('Julie');

    expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
  });
});
