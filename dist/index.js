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
const FunctionTest = (t1, t2) => t1 + t2;
let test1 = "souchen";
let test2 = 10;
test2 = "souchen";
test2 = 20;
function getFunction(btns) {
    console.log(`Action for Button up is ${btns.up}`);
    console.log(`Action for Button Right is ${btns.right}`);
    console.log(`Action for Button Down is ${btns.down}`);
    console.log(`Action for Button left is ${btns.left}`);
    console.log(`Action for new button is ${btns.x}`);
}
getFunction({ up: "Jump", right: "Go right", left: "Go left", down: "Go down", x: true });
function Compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else
        return 2;
}
console.log(Compare(200, 300));
//# sourceMappingURL=index.js.map