// import {Widget} from "../../src/widget.js";
// import {Container} from 'aurelia-dependency-injection';
// import {BehaviorInstance} from 'aurelia-templating';
//
// describe('Widget', () =>
// {
//   let widget;
//   let container;
//
//   beforeEach( () =>
//   {
//     container = new Container();
//     widget = container.get(Widget);
//   });
//
//   it("constructs with a name property", () =>
//   {
//     expect(widget.name).toEqual('');
//   });
//
//   // it('clears the name property when isOpen is set to true', () =>
//   // {
//   //   widget.name ="Testing";
//   //   widget.isOpen = false;
//   //   console.log("\nwidgetname\n");
//   //   console.log(widget.name);
//   //   console.log("\nisOpen\n");
//   //   console.log(widget.isOpen);
//   //   expect(widget.name).toEqual('');
//   // });
//
//   // it('clears the name property when isOpen is set to true two', done => {
//   //   widget.name = 'Testing';
//   //   widget.isOpen = true;
//   //   setTimeout(() => {
//   //     expect(widget.name).toEqual('');
//   //     done();
//   //   }, 500);
//   // });
//
//   it('clears the name property when toggleOpen is clicked', done => {
//     spyOn(widget, 'isOpenChanged');
//     widget.name = 'testing';
//     widget.toggleOpen();
//     setTimeout(() => {
//       expect(widget.isOpenChanged).toHaveBeenCalledWith(true, false)
//       done();
//     });
//   });
//
//
// });
