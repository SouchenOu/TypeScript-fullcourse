"use strict";
console.log(Math.floor(2.40));
let TheName = "souchen";
let TheAge = 24;
let theHire = true;
let data = "hello souchen";
let test;
TheName = "soukaina";
data = 122;
function Add(n1, n2) {
    return n1 + n2;
}
console.log(Add("10", "20"));
let variable = "soukaina ouchen";
variable = 200;
variable = false;
variable = "helllo";
let array = ["test1", "test2", "test3"];
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["one", "two", "three"];
let arrayThree = ["test1", "test2", "test3", 1, 22, ["C", "A"], [true, false]];
let showMsg = true;
function OurFunction(name, age, salary) {
    if (showMsg) {
        return `Hello ${name} , age is ${age}, Salary is ${salary}`;
    }
    return "No data to show";
}
console.log(OurFunction("soukaina", "24", "10000"));
function AddALL(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
        nums.forEach((num) => result += num);
    }
    return result;
}
console.log("result is : ");
console.log(AddALL(10, 2, 3, 5));
const AddFunction = function (num1, num2) {
    return num1 + num2;
};
console.log(AddFunction(10, 20));
const Function2 = (n1, n2) => n1 + n2;
console.log(Function2(100, 200));
//# sourceMappingURL=index.js.map