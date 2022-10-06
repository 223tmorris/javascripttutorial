// // switch statements
// const grade = '50';

// switch (grade) {
//   case '50':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got a B!');
//     break;
//   case 'C':
//     console.log('you got a C!');
//     break;
//   case 'D':
//     console.log('you got a D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('not a valid grade');
// }





// // variables & block scope
// const age = 30;

// if (true) {
//   const age = 40;
//   const name = 'shaun';
//   console.log('inside 1st code block: ', age, name);

//   if (true) {
//     const age = 50;
//     console.log('inside 2nd code block: ', age);
//     var test = 'hello';
//   }
// }

// console.log('outside code block: ', age, name, test);










// tutorial 4 - functions


// // function expression
// const speak = function() {
//   console.log('good day!');
// };

// // greet();
// // greet();
// // greet();

// speak();
// speak();
// speak();

// // function declaration
// function greet() {
//   console.log('hello there');
// }




// // arguments & parameters

// const speak = function(name = 'luigi', time = 'night') {
//   console.log(`good ${time} ${name}`);
// };

// speak();
// speak('shaun');




// // returning values

// // regular function
// const calcArea = function(radius) {
//   return 3.14 * radius **  2;
// };

// // arrow function
// const calcArea = radius => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log('area is: ', area);

// // practice arrow functions

// const greet = function() {
//   return 'hello, world';
// };

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// console.log(bill([10, 15, 30], 0.2));

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));





// const name = 'shaun';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);





// // callbacks & forEach

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(value => {
//   // do something
//   console.log(value);
// });

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);