//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof BigNumber); => undefined
// console.log(typeof anotherId); => symbol
// console.log(typeof outsideTemp); => object
// console.log(typeof myFunction); => function
// console.log(typeof userEmail); => undefined

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => recieve a copy of declared variable

// , Heap (Non-Primitive) => recive a reference of origional value

let myYoutubeName = "aaryandawalkardotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(anotherName); 
// Here as the datatype is primitive a copy of the origional data is generated and origional data doesn't get modified and lost

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "aaryan@gmail.com"

// console.log(userOne);
// console.log(userTwo);
// Here datatype is non-primitive ie only reference of origional data is given which can therefore be modified and lost