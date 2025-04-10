/*Global Scope*/ //var c = 300;

let a = 300;

if (true) {
  /*Block Scope*/ let a = 10;
  const b = 20;
  //c = 30;
  // console.log("Inner", a); // 10
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Aaryan";

  function two() {
    const website = "youtube.com";
    console.log(username);
  }
  // console.log(website);

  two();
}
// one();

if (true) {
  const username = "Aaryan";
  if (username === "Aaryan") {
    const website = "youtube.com";
    // console.log(username + " " + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// addTwo(5);
/*Both function and expressions*/
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
