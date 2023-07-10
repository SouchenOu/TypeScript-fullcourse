console.log(Math.floor(2.40));


let TheName : string = "souchen";
let TheAge : number = 24;
let theHire : boolean = true;
let data : any = "hello souchen";
let test; // type is any

TheName = "soukaina";
data = 122;

function Add(n1 : string,n2 : string)
{
    return n1+n2;
}


console.log(Add("10","20"));


let variable: string | number | boolean = "soukaina ouchen";

variable = 200;
variable = false;
variable = "helllo";

let array = ["test1", "test2", "test3"]; // here we can enter what you want because we dont spicify the type
//let array : string[] = ["test1", "test2", "test3"]
// for(var i = 0; i <array.length; i++)
// {
//     console.log(array[i].repeat(3));
// }

// type Annotations with Miltidimentional Arrays

let arrayOne: number[] = [1,2,3,4,5];
let arrayTwo : string[] = ["one", "two", "three"];
let arrayThree : (string | number | string[] | boolean[])[] = ["test1", "test2", "test3", 1, 22,["C", "A"], [true, false]];


// *********************************************Type annotation with function************************* 

let showMsg = true;

function OurFunction(name : string, age : string, salary : string) : string
{
    if(showMsg)
    {
        return `Hello ${name} , age is ${age}, Salary is ${salary}`;
    }
    return "No data to show"

}



console.log(OurFunction("soukaina", "24", "10000"));


//************************************************Rest parameters**************************************

function AddALL(...nums : number[]) : number
{
    let result = 0;
    for(let i = 0; i < nums.length; i++)
    {
        result += nums[i];
        nums.forEach((num) => result += num ); // we can use the first expression or this one
        

    }
    return result;
}

console.log("result is : ");
console.log(AddALL(10, 2, 3, 5));


//**************************************Anonymous function**************************/
//Arrow function

const AddFunction = function(num1: number, num2: number) : number
{
    return num1 + num2;
}

console.log(AddFunction(10, 20));

const Function2 = (n1: number, n2: number) : number => n1 + n2;

console.log(Function2(100, 200));

const FunctionTest = (t1:number, t2:number) : number => t1 + t2;


//******************************************type Alias********************************/

type st = string; // so now ts is an alias of string
let test1 : st = "souchen";


type standnb = string | number;

let test2 : standnb = 10;
test2 = "souchen";
test2 = 20; 


// *******************************************Data type********************************/
// Advanced type Alias

type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string
}

// To add another element to this truct

type newOne = Buttons & {
    x : boolean;
}

function getFunction(btns: newOne)
{
    console.log(`Action for Button up is ${btns.up}`);
    console.log(`Action for Button Right is ${btns.right}`);
    console.log(`Action for Button Down is ${btns.down}`);
    console.log(`Action for Button left is ${btns.left}`);
    console.log(`Action for new button is ${btns.x}`)
}
getFunction({up: "Jump", right: "Go right", left: "Go left", down: "Go down", x: true});


/*** data types*/
/****Literal types */

function Compare(num1: number, num2: number)
{
    if(num1 === num2)
    {
        return 0;
    }else if(num1 > num2)
    {
        return 1;
    }else  
        return 2;
}

type nums = 0 | 1 | 2;
function Compare2(num1:number,num2:number) : nums{
    if(num1 === num2)
    {
        return 0;
    }else if(num1 > num2)
    {
        return 1;
    }else  
        return 2;
}


console.log(Compare(200, 300));