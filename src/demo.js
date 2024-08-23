// var bar = true;

// console.log(bar + 0);
// console.log(bar + "xyz");
// console.log(bar + true);
// console.log(bar + false);

// var salary = "1000$";

// (function () {
//   console.log("Original salary was " + salary);

//   var salary = "5000$";

//   console.log("My New Salary " + salary);
// })();

// var x = 1;
// var output = (function (x) {
//   delete x;
//   return x;
// })(0);

// console.log(output);

// arrayList = [];
// console.log(arrayList);

// (function () {
//   var greet = "Hello World";
//   var toGreet = [].filter.call(greet, function (element, index) {
//     return index > 5;
//   });
//   console.log(toGreet);
// })();

// var arrA = [
//   { prop1: "value of array A!!" },
//   { someProp: "also value of array A!" },
//   3,
//   4,
//   5,
// ];
// var arrB = arrA.slice();
// arrB[0].prop1 = 42;
// arrB[3] = 20;
// console.log(arrA);

// var employeeId = "aq123";

// function Employee() {
//   this.employeeId = "bq1uy";
// }
// console.log(new Employee().employeeId);
// Employee.prototype.employeeId = "kj182";
// Employee.prototype.JobId = "1BJKSJ";
// console.log(new Employee().JobId);
// console.log(new Employee().employeeId);

var myObject = {
  x: 3,
  myFunc: function (y, z) {
    return this.x + y * z;
  },
};
myObject.myFunc.apply({ x: 5 }, [2, 4, 6]);
