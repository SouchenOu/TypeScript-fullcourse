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
function Compare2(num1, num2) {
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
let articles = [12, "title number one", true];
articles = [14, "title number two", false];
console.log(`Our article is --> ${articles}`);
console.log(`First element in my array is --> ${articles[0]}`);
articles.push(200);
console.log(`First element in my array is --> ${articles[0]}`);
let articles2 = [100, "Last one", true];
const [id, title, published] = articles;
console.log(id);
console.log(title);
console.log(published);
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
var levels;
(function (levels) {
    levels[levels["kids"] = 15] = "kids";
    levels[levels["Easy"] = 8] = "Easy";
    levels[levels["Medium"] = 6] = "Medium";
    levels[levels["Hard"] = 3] = "Hard";
})(levels || (levels = {}));
let lvl = "Easy";
if (lvl == "Easy") {
    console.log(`The level is ${lvl} and Number of seconds is ${levels.Easy}`);
}
function GetAction(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
}
GetAction({ one: "souchen", two: 42, three: true });
//# sourceMappingURL=index.js.map