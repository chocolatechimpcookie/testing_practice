describe("MathUtils", () =>
{
  var calc;



  // describe("Nested Describe Demo", function() {
  //     beforeEach(function() {
  //         console.log("beforeEach level 1");
  //     });
  //     describe("MyTest level2", function() {
  //         beforeEach(function() {
  //             console.log("beforeEach level 2");
  //         });
  //         describe("MyTest level3", function() {
  //             beforeEach(function() {
  //                 console.log("beforeEach level 3");
  //             });
  //             it("is a simple spec in level3", function() {
  //                 console.log("A simple spec in level 3");
  //                 expect(true).toBe(true);
  //             });
  //             afterEach(function() {
  //                 console.log("afterEach level 3");
  //             });
  //         });
  //         afterEach(function() {
  //             console.log("afterEach level 2");
  //         });
  //     });
  //     afterEach(function() {
  //         console.log("afterEach level 1");
  //     });
  // });
  //
  //
  // beforeEach( () =>
  // {
  //   calc = new MathUtils();
  // });
  //
  // describe("When calc is used to perform math ops" , () =>
  // {
  //   it("sum of 3 and 5", () =>
  //   {
  //     expect(calc.sum(3,5)).toEqual(8);
  //   });
  //
  //   it("multi 10 and 40", () =>
  //   {
  //     expect(calc.multiply(10, 40)).toEqual(400);
  //   });
  //
  //   it("calc factorial of 9", () =>
  //   {
  //     expect(calc.factorial(9)).toEqual(362880);
  //   });
  //
  //   it("throw error in factorial operation when the number is negative", () =>
  //   {
  //     expect( () =>
  //     {
  //       calc.factorial(-7)
  //     }).toThrowError(Error);
  //   });
  // });







  beforeEach( () =>
  {
    calc = new MathUtils();
    spyOn(calc, "sum");
  });


  describe("when calc is for math op", () =>
  {
    it("calc 3 and 5", () =>
    {
      calc.sum(3,5);

      expect(calc.sum).toHaveBeenCalled();
      expect(calc.sum).toHaveBeenCalledWith(3,5);
    });
  });




});
