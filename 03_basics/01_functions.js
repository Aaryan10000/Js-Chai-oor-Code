// Functions - Code written is packaged and can be taken anywhere and anytime to be used as desired

function sayMyName() {
  console.log("A");
  console.log("A");
  console.log("R");
  console.log("Y");
  console.log("A");
  console.log("N");
}

// sayMyName();

// function addTwoNumbers(number1, number2) /*Parameters*/ {
//   console.log(number1 + number2);
// }

// addTwoNumbers(5, null) // Arguments

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(5, 10);
// console.log("Results: ", result);

function loginUserMessage(username = "aaryan") {
  if (!username) {
    log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Aaryan"));
// console.log(loginUserMessage("Aaryan"));

function calculateCartPrice(val1, val2, ...num1) /*Rest Operator*/ {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "Aaryan",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

handleObject({
  username: "Aaryan",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArrary) {
  return getArrary[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
