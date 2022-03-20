"use strict";

// let number = 5;
// const leftNum = 11;

// number = 10;
// console.log(number);

// const obj = {
//   a: 50
// };
// obj.a = 15;
// console.log(obj);

// const result = confirm("Are you sure you want?");

// const answer = +prompt("wam jest 18", "18");
// console.log(answer + 5);
// console.log(typeof (answer));

// const answer = [];

// answer[0] = prompt("what is your name", "");
// answer[1] = prompt("what is your surname", "");
// answer[2] = prompt("how old are you", "");

// document.write(answer);
// document.write(typeof (answer));

// console.log(typeof (answer));
// console.log(typeof (null));

function User(name) {
  this.name = name;
  console.log(this);
}

const newUser = new User("John");
console.log(this.name);