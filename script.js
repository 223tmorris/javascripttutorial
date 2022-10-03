// switch statements
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





// variables & block scope
const age = 30;

if (true) {
  const age = 40;
  const name = 'shaun';
  console.log('inside 1st code block: ', age, name);

  if (true) {
    const age = 50;
    console.log('inside 2nd code block: ', age);
    var test = 'hello';
  }
}

console.log('outside code block: ', age, name, test);