// single line comment
//declaring variable
var a = 1; //var is global scope
let b = 2; //let cannot reassign

// constant value cannot reassign and re declare
const c = 5;
alert(a + b);
//dynamic/weakly typed datatypes
let a = 10;

//string datatypes
let name = "samir";

//undefined datatype -- no value defined
let test;
alert(test);

//to display input box
prompt(test);

//to print in console   --used for debugging
console.log("hello I am test123");

//Operators
let x = 10;
let y = 20;
let add = x + y;
alert(add);

//divide
let d = y / x;

//power --2^5
let f = 2 ** 5;

// double equals ==  checks value
alert(a == b);
//triple equals is used to check the value and data type
alert(a === b);

// use of &&         --- both should be true
let t = false && true;
alert(t);

let isLoggedIn = true;
let isSuperuser = true;
//let l = isLoggedIn && true;   --- dubai true vayo vane returns trun if not returns false

let l = isLoggedIn && isSuperuser; //    --
alert(l);

//Logical OR         -- auta true matrai vayo vani ni returns true
let testt = false || true;

// typeof   -- returns type of datatype
alert(typeof isLoggedIn);
alert(typeof a); //returns integer

//if statement
if (10 > 12) {
	alert(typeof a);
} else {
	alert(typeof a);
}

//array
// arrya index starts from 0     -- array[0]=1
let array = [1, 2, 3, 4, 5, 6, 7];
//--//   0  1  2  3  4  5  6
alert(array[2]);

//objects   --- starts from curly braces  -- dont have index
let object1 = { name: "samir", age: 20 };
//--             key: value;
