console.log(Math.floor(2.40));
var TheName = "souchen";
var TheAge = 24;
var theHire = true;
var data = "hello souchen";
var test; // type is any
TheName = "soukaina";
data = 122;
function Add(n1, n2) {
    return n1 + n2;
}
console.log(Add("10", "20"));
var variable = "soukaina ouchen";
variable = 200;
variable = false;
variable = "helllo";
var array = ["test1", "test2", "test3"]; // here we can enter what you want because we dont spicify the type
//let array : string[] = ["test1", "test2", "test3"]
// for(var i = 0; i <array.length; i++)
// {
//     console.log(array[i].repeat(3));
// }
// type Annotations with Miltidimentional Arrays
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = ["one", "two", "three"];
var arrayThree = ["test1", "test2", "test3", 1, 22, ["C", "A"], [true, false]];
// Type annotation with function 
var showMsg = true;
function OurFunction(name, age, salary) {
    if (showMsg) {
        return "Hello ".concat(name, " , age is ").concat(age, ", Salary is ").concat(salary);
    }
    return "No data to show";
}
console.log(OurFunction("soukaina", "24", "10000"));
