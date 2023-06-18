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
for(var i = 0; i <array.length; i++)
{
    console.log(array[i].repeat(3));
}

