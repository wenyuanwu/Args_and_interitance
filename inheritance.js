

Function.prototype.inherits = function (SuperClass) {
      function Surrogate(){}
      Surrogate.prototype = SuperClass.prototype;
      let a = new Surrogate();
      this.prototype = a;
      this.prototype.constructor = this;
};
//
// function MovingObject () {
//   // let say = function () {
//   //     console.log("Hi!");
//   //   };
// }
//
// // MovingObject.prototype.say = function(){
// //     console.log("Hi!");
// //   };
// //
// function Ship () {}
// Ship.inherits(MovingObject);
//
// let move1 = new MovingObject();
// // move1.say();
//
// // let ship1 = new Ship();
// // ship1.say();
// //test2
//
//
// Ship.prototype.drive = function(){
//   console.log("I could drive!");
// };
// //
// // move1 = new MovingObject();
// move1.drive();
