// function sum(){
//   const arr = Array.from(arguments);
//   let arr_sum = 0;
//   arr.forEach( el => {arr_sum += el;});
//   return arr_sum;
// }

// let result = sum(1,2,3,4,5);
// console.log(result);

// function sum_to(...arr){
//   let arr_sum = 0;
//   arr.forEach( el => {arr_sum += el;});
//   return arr_sum;
// }

// let s = sum_to(1,2,3,4,5);
// console.log(s);

  // function(){
  // let that = this;
  // return function() {that.apply(obj)} :



Function.prototype.myBind = function() {
  const ctx = arguments[0];
  const bindArr = Array.from(arguments).slice(1);
  const that = this;
  console.log(`1st ${this}`);

  return function() {
    console.log(`2nd ${this}`);
    const callArr = Array.from(arguments);
    that.apply(ctx, bindArr.concat(callArr));
  };
};

Function.prototype.myBind2 = function(obj,...bindArgs) {
  return (...callArgs)=> {
    this.apply(obj, bindArgs.concat(callArgs));
  };
};





function curriedSum(numArgs) {
  const numsArr = [];

  const _curriedSum = function(num) {
    numsArr.push (num);
    if (numsArr.length === numArgs) {
     return numsArr.reduce((a,b) => a + b);
   } else {
      return _curriedSum;}
  };

  return _curriedSum;
};

Function.prototype.curry = function(numArgs) {
  const numsArr = [];
  const fn = this;

  const _curriedFn = function(num) {
    numsArr.push (num);
    if (numsArr.length === numArgs) {
     return fn(...numsArr);
   } else {
      return _curriedFn;}
  };

  return _curriedFn;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(4)(20)(6));
