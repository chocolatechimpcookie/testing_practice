
describe("Test of a test", () =>
{
  it('should just be a test.', () =>
  {
    browser.ignoreSynchronization = true;
    browser.get("https://www.google.com");

    // console.log("\n\n\n\n\ This is the error container \n\n\n\n ");
    // $('#gbw > div > div .gb_b').getAttribute('outerHTML')
    // .then(function (value){console.log(value);});

    // ^this prints the value correctly to the console
    var v = this;
    var error;
    console.log("\n\n\n\n\ This is the error container \n\n\n\n ");
    $('#gbw > div > div .gb_b').getAttribute('outerHTML')
    // $('[data-jiis=cc]').getAttribute('outerHTML')
    .then(function (value){
      // error = value;
      console.log(value);
      // v.error = value;
    });
    console.log(error);


    // this returns a managed promise, so the value is within the then
    //but it is not returning it

    // console.log("\n\n\n\n\ This is the error container \n\n\n\n ");
    // console.log(error);
    // error =  $('#lst-ib + div').getAttribute('innerHTML');
    // console.log("\n\n\n\n\ This is the error container \n\n\n\n ");
    // console.log(error);

  });
});
