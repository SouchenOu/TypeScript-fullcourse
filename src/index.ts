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




// **************************************data Types   {Array of different types} ***********************
//Tuple
//-------is another sort of array types */
//-------We know exactly how many element is containes
//-------We know each type it contains at spesific positions


let articles: [number, string, boolean] = [12, "title number one", true];

articles = [14, "title number two", false];
console.log(`Our article is --> ${articles}`);
console.log(`First element in my array is --> ${articles[0]}`);
// we can push another element to my array

articles.push(200);
console.log(`First element in my array is --> ${articles[0]}`);

// if we add readonly to our array then we cant push to that array

let articles2: readonly [number, string, boolean] = [100, "Last one", true];

// We can assign all articles element to another element
const [id, title, published] = articles;

console.log(id);
console.log(title);
console.log(published);



//*************************************************Void and never************ */
//-------------void */
//---Function that will return nothing
//---Function in JavaScript that not Return a value will show undefined 
//---Undefined is not void


//------------Never */
//---Return Type Never Returns
//---The Function Doesnt have a normal Compiletion
//---It Throws an Error or Never Finishes Running At all "infinit loop"


function alwaysLog(name: string) : never{
    while(true)
    {
        console.log(name);
    }
    //return ;  --> this function will never return because we have loop infinie so we write never
}

    //alwaysLog("souchen");

//**********************************Enums*************************** */
//--Enums => Enumerations

//---Allow us to Declare a set of named constants
//---Used for logical grouping collection of constants "Collection of Related values"
//---It orgnise your code
//---By default Enums are number Based, First element is 0
//---There is a numeric Enums
//---There is a string Based enums
//---There is Hetereneous Enums [string + Number]

enum levels{
    kids = 15,
    Easy = 8,
    Medium = 6,
    Hard = 3
}
let lvl: string = "Easy";


if(lvl == "Easy")
{
    console.log(`The level is ${lvl} and Number of seconds is ${levels.Easy}`);
}


//******************************Data type (Type assertions) ************************************/
//----Sometime compiler Doesnt know the informationwe do
//----TypeScript is not performing any check to make sure type assertion is valid

//******We can write one of this lines */


// let myImg = <HTMLImageElement> document.getElementById("my-img");
//--let myImg = document.getElementById("my-img") as HTMLImageElement;


//*******************************Union and intersection types ************************** */

//Union and Intersection Types
//--Union type
//----The |  Symbol is used to create the union => "Or"


//Intersection Type
//----Is A type that Combines Several Types into one
//----The & Symbol is User to create an intersection => And


//----- If a Union is An OR, Then an Intersection is an AND
type A = {
    one : string,
    two : number,
    three : boolean
}
// we add another element to this struct A

type B = A &{
    Four: number;
}
type C ={
    Five: number;
}

type Mix = A & C;

function GetAction(btns : A)
{
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
}

GetAction({one : "souchen", two : 42, three: true});


//************************Type annotations with object****************** */

let myObject: 
{
    username: string,
    id: number,
    hire: boolean
} = {
    username: "souchen",
    id: 100,
    hire: true
};


// we can change the data of our object

myObject.username = "soukaina";
myObject.id = 200;
myObject.hire = false;

//******************************************Interface**********************************/

//--Interface Declaration
//--Serve like types
//--The interface Describes the shape of an object
//--It defines the syntax to follow

//---Use with object
//---Use with function
//---Use read only and optional operator


//** There is no interface in javaScript, there is just OBJECT*/

interface User {
    id: number,
    username: string,
    country: string
}

let user: User = {
    id: 200,
    username: "souchen",
    country: "Morroco"
}

console.log(user);

function GetData(data : User)
{
    console.log("our data is:");
    console.log(`id is ${data.id} `);
    console.log(`username is ${data.username}`);
    console.log(`country is ${data.country}`);
}


GetData({id: 10, username:"soukaina", country: "maroc"});


//*************************Interface Method and parameters**************************** */

interface UserInfo {
    id: number,
    username: string,
    country: string,
    sayHello() : string,
    sayWelcome : () => string
}

let user2: UserInfo = {
    id: 200,
    username: "souchen",
    country: "Morroco",
    sayHello(){
        return `Hello ${this.username}`;
    },
    sayWelcome()
    {
        return `Welcome in 1337`;
    }
}



console.log("Interface with method");
console.log(`His id is --> ${user2.id}`);
console.log(`${user2.sayHello()}`);

//*****************************Interface reopen and use cases***********************

//HomePage

interface Settings {
    theme : boolean,
    font: string
}


// Article page

interface Settings {
    sidebar : boolean;
}

// contact page

interface Settings {
    external: boolean;
}

let set1 : Settings = {
    theme : true,
    font : "Open sans",
    sidebar: false,
    external: true
}


//*************************************Interface extending************************* */


interface Home{
    id: number,
    address: number,
    country: string
}

interface Moderator extends Home {
    role: string | number
}

let HomeElement : Home = {
    id: 100,
    address: 228,
    country: "morroco"
}

let modePeron : Moderator = {
    id : 500,
    address: 888,
    country: "France",
    role: "Amploye"
}

interface Admin extends Home, Moderator {
    protect: boolean;
}

let administator : Admin = {
      id: 800,
      address: 877,
      country: "German",
      role: "Amploye",
      protect: true
}


console.log(`The id is ${administator.id}`);
console.log(`The address is ${administator.address}`);
console.log(`The country is ${administator.country}`);
console.log(`The role is ${administator.role}`);
console.log (`The protection is ${administator.protect}`);


//******************************The Annotations with class******************************* */


class Homme {
    username : string;
    age : number;
    msg : () => string;
    constructor(name : string, Age : number)
    {
        this.username = name,
        this.age = Age;
        this.msg = function() : string {
            return `Hello ${this.username}, your age is ${this.age}`;
        }
    }
}


let userName = new Homme("soukaina ouchen", 24);

console.log(`His name is ${userName.username}`);
console.log(`His Age is ${userName.age}`);


/*************Data access Modifiears & Parameters Properties */

//---Public
//-----------All Members of a class TypeScript are PUBLIC
//-----------All public Members can be accessed anywhere without any restrictions
//---Private
//-----------Members are visible Only to that class and are not accessible outsite the class
//---Protected
//-----------Same Like provite but can be accessed using the Deriving class


//*** TypeScript is a Layer on top of Jvascript
//-It should Remove All Annotations and Although Access Modifiers "Private For example"




class newPerson{
    
        private name: string;
        private Age: number;
        public address: string;
        protected Nationality: string;
        msg: () => string;

    constructor(name: string, Age: number, address: string, Nationality:string)
    {
        this.name = name;
        this.Age = Age;
        this.address = address;
        this.Nationality = Nationality;
        this.msg = function()
        {
            return `Hello ${this.name}, your age is ${this.Age}, your address is ${this.address} and your nationality is ${this.Nationality}`
        }

    }

    

}


let dataUser = new newPerson("SOUKAINA", 23, "255 KHOURIBGA", "MORROCO");
console.log(dataUser);