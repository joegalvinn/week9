import { personType } from "./types";

// typescript keeps the same core elements we had in JS
console.log("hello, typescript");

//we use the colon : to specify the type
const myAge: number = 78;
console.log(myAge);

//this gives me an error because i am trying to give a string type to a number type
//myAge = "number"

// const myName: string = "manny";

// const isInNorwich: boolean = true;

//array
const myArray: Array<string> = ["item", "item", "item"];
const myOtherArray: string[] = ["item", "item", "item"];
const myOtherOtherArray: Array<string | number> = ["item", "item", "item"];
const myThirdArray: (string | number)[] = [1, "string"];

//!last resort "any"
const anyArray: any[] = [true, "string", 4];

//object
const person: {
  personName: string;
  personAge: number;
  personLocation: string;
} = {
  personName: "Joe",
  personAge: 870,
  personLocation: "the moon",
};

//declaring the types seperatly
//you can store your types in a lib folder and import them here
//you can reuse your types
// type personType = {
//   personName: string;
//   personAge: number;
//   personLocation: string;
// };

const person1: personType = {
  personName: "Tim",
  personAge: 57,
  personLocation: "venus",
};

//functions
function add(a: number, b: number) {
  return a + b;
}

//this function only accepts arguments with a number data type
//if the argument is any other data type it will error
add(4, 7);

//what data type is TS thinking goes in here?
//if we decare a variable with no initial value, TS infers that the type is any --> data inference
let myJob;

myJob = "instructor";
myJob = 34;
myJob = true;

//TS knows what the shape of the type should look like. If I have a type string, TS knows the shape of a string
let mySecondAge: number = 78;
mySecondAge = "65";
