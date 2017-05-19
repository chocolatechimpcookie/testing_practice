// describe('aurelia homepage', () =>
// {
//   it('should navigate to a different subpage', () =>
//   {
//       //load page, nacigate to a different subpage, wait for 2 sec
//       browser.sleep(2000);
//       expect()
//
//   });
// });



// describe('aurelia homepage', () =>
// {
//   beforeEach(() =>
//   {
//     browser.get('http://www.aurelia.io');
//   });
//
//
//   it('should have propery header text set', () =>
//   {
//       expect(element(by.tagName('h2')).getText()).toBe('EXPECTED HEADER');
//   });
//
//   it('should find an about section', () = >
//   {
//     expect(element{by.id('about')).isPresent()).toBe(true);
//   });
//
// });





describe('google homepage', () =>
{
    browser.waitForAngularEnabled(false);
    //google doesn't use angular
    beforeEach(() =>
    {
      browser.get('http://www.google.com');
    });
    //before each? why not just use browser.get by itself

    it('should load page', () =>
    {
      element(by.name('q')).sendKeys('Aurelia');
      element(by.name('btnG')).click();

      browser.sleep(2000);
      //gives it time
      expect(element(by.css('h3 a')).getText()).toContain('Aurelia');
    });

});
