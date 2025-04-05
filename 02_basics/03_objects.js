// Singleton - It is a singleton if made from constructor function, ie it is a unique instance of the object - Object.create

// Object literal/ Not singleton - If made by declaring object like a literal

const mySym = Symbol("key1");

const JsUser = {
  name: "Aaryan",
  "full name": "Aaryan Dawalkar",
  [mySym]: "key1",
  age: 21,
  location: "India",
  email: "aaryan@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Wednusday", "Friday"],
};

// console.log(JsUser.email); // Not a great way to access properties
// console.log(JsUser["email"]); // Better way to access properties
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

JsUser.email = "aaryan.gpt@gmail.com";
// Object.freeze(JsUser); // This will make the object immutable
JsUser.email = "aaryan.@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
