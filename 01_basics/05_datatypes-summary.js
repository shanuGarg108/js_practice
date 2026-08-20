// primitive data type

// 7types : String ,Number, Null, undefined, Boolean,Symbol,Bigint

const score=100
const scoreValue=100.3

const isLogged=false

const outsideTemp=null
let marks;

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId);

const bigNumber=123n

// Reference data tye (Non primitive)

// Array , Objects , Functions

const Heros=["Shaktimaan","Naagraj","Ironman"]

let myObject={
    name:"Shanu",
    age:23
}

const myFunction=function(){
    console.log("Hello World");
    
}
console.log(typeof myFunction);

// typeof
// score:Number , scoreValue:Number , isLogged:boolean , outsideTemp:object , anotherId:symbol bigNumber:bigint , Heros:object , myObject:object , myFunction:function


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive data type) and Heap (non primitive data type)

let name="Shanu"
let anotherName=name

anotherName="Shanu Garg"

console.log(name)
console.log(anotherName)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="Shanu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
