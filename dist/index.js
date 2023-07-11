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
let myObject = {
    username: "souchen",
    id: 100,
    hire: true
};
myObject.username = "soukaina";
myObject.id = 200;
myObject.hire = false;
let user = {
    id: 200,
    username: "souchen",
    country: "Morroco"
};
console.log(user);
function GetData(data) {
    console.log("our data is:");
    console.log(`id is ${data.id} `);
    console.log(`username is ${data.username}`);
    console.log(`country is ${data.country}`);
}
GetData({ id: 10, username: "soukaina", country: "maroc" });
let user2 = {
    id: 200,
    username: "souchen",
    country: "Morroco",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome() {
        return `Welcome in 1337`;
    }
};
console.log("Interface with method");
console.log(`His id is --> ${user2.id}`);
console.log(`${user2.sayHello()}`);
let set1 = {
    theme: true,
    font: "Open sans",
    sidebar: false,
    external: true
};
let HomeElement = {
    id: 100,
    address: 228,
    country: "morroco"
};
let modePeron = {
    id: 500,
    address: 888,
    country: "France",
    role: "Amploye"
};
let administator = {
    id: 800,
    address: 877,
    country: "German",
    role: "Amploye",
    protect: true
};
console.log(`The id is ${administator.id}`);
console.log(`The address is ${administator.address}`);
console.log(`The country is ${administator.country}`);
console.log(`The role is ${administator.role}`);
console.log(`The protection is ${administator.protect}`);
class Homme {
    constructor(name, Age) {
        this.username = name,
            this.age = Age;
        this.msg = function () {
            return `Hello ${this.username}, your age is ${this.age}`;
        };
    }
}
let userName = new Homme("soukaina ouchen", 24);
console.log(`His name is ${userName.username}`);
console.log(`His Age is ${userName.age}`);
class newPerson {
    constructor(name, Age, address, Nationality) {
        this.name = name;
        this.Age = Age;
        this.address = address;
        this.Nationality = Nationality;
        this.msg = function () {
            return `Hello ${this.name}, your age is ${this.Age}, your address is ${this.address} and your nationality is ${this.Nationality}`;
        };
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
}
let dataUser = new newPerson("SOUKAINA", 23, "255 KHOURIBGA", "MORROCO");
console.log(dataUser.Name);
dataUser.Name = "ouchen";
console.log(dataUser);
class newClass {
    static getCount() {
        console.log(`${this.created} object created`);
    }
    constructor(name) {
        this.name = name;
        newClass.created++;
    }
}
newClass.created = 0;
let classElement1 = new newClass("soukaina");
let classElement2 = new newClass("asmae");
let classElement3 = new newClass("salma");
let classElement4 = new newClass("fati");
console.log(newClass.getCount());
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, type) {
        super(title);
        this.type = type;
    }
    getCooking() {
        console.log("Cooking time for pizza");
    }
}
class Burger extends Food {
    constructor(title, gender) {
        super(title);
        this.gender = gender;
    }
    getCooking() {
        console.log("Cooking time for Burger");
    }
}
let pizzaOne = new Pizza("chicken pizza", "swetty");
let Burger1 = new Burger("chess burger ", "also sweety");
console.log(`The name of the first pizza is `, pizzaOne.title);
console.log(`The name of the first burger is `, Burger1.title);
class Player {
    constructor(Name) {
        this.name = Name;
    }
    attack() {
        console.log("Attacking now");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        super.attack();
        console.log("Amazon attack");
        this.spears -= 1;
    }
}
class barbarien extends Player {
    constructor(name, Durability) {
        super(name);
        this.Durability = Durability;
    }
    attack() {
        super.attack();
        console.log("barbarien attack");
        this.Durability += 1;
    }
}
let barOne = new barbarien("test", 20);
let amazon = new Amazon("book", 100);
console.log(barOne.attack());
console.log(amazon.attack());
console.log(`Amazon spears is--> ${amazon.spears}`);
console.log(`Durability is --> ${barOne.Durability}`);
//# sourceMappingURL=index.js.map