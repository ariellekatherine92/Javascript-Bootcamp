// Exercise 1
// Write a function declaration
function pickDeclaration() {
    return pickDeclaration;
}

// Write a function expression
const ariel = (age, gender) => {
    return age + gender;
}

// Write a function using an "arrow" function

const subtract = (x, y) => {
    return x - y;
}



// Create a function that will take 2 numbers and log the sum of the 2 numbers

const num1 = 5;
const num2 = 3;

// add two numbers
function sumOfTwo(num1, num2) {
    return num1 + num2;
}

// // display the sum
// console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);



// Create a function that takes in a number and logs from 0 to whatever number that is passed in

function range(num) {
    for(let i = 1; i <= num; i++) {
        console.log(i)
    }
    return;
}


// Create a function that takes in a number and logs if it is even or not

const isEven = (num) => {
    if (num % 2 === 0) {
      return "is even";
    } else {
      return "is odd";
    }
  };


 //////////////

function sayName(name, age) {
    return "hi my name is " + name + " and my age is " + age;
}

const people = [
    {name: "mary", age: 23}


]



for(let i = 0; i < people.length; i++) {
    console.log(sayName(people[i].name))
}

function add (x, y) {
    return x + y;
}

