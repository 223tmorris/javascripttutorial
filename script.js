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

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);





// //get a reference to the 'ul'
// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chan-li'];

// let html = ``;

// people.forEach(person => {
//   // create html template
//   html += `<li style="color:purple;">${person}</li>`
// });

// console.log(html);
// ul.innerHTML = html;










// tutorial 5 - objects

// object literals

// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 }
// ];

// console.log(blogs);

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
//   ],
//   login: function() {
//     console.log('the user logged in');
//   },
//   logout: function() {
//     console.log('the user logged out');
//   },
//   logBlogs: function() {
//     // console.log(this.blogs);
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     });
//   }
// };

// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// const key = 'location';

// console.log(user[key]);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// user.login();
// user.logout();

// user.logBlogs();
// console.log(this);





// // math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random(0, 100);

// console.log(random);
// console.log(Math.round(random * 100));





// // primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// // reference values

// const userOne = { name: 'ryu', age: 30 };
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.name = 'chun-li';
// console.log(userOne, userTwo);










// tutorial 6 - the document object model

// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error'); 

// paras.forEach(para => {
//   console.log(para);
// });

// console.log(errors);





// // get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// // get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);





// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</H2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });





// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The Net Ninja Website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color:green;');





// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';





// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error'); 
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  }
  if(p.innerText.includes('success')){
    p.classList.add('success');
  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');