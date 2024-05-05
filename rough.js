

// // const fs = require('fs');

// // const os =require('os');
// // var user=os.userInfo(os);
// // console.log(user);
// // fs.appendFile('message.txt', `Hello ${ user.username}`, (err) => {
// //   if (err) {
// //     console.error('Error appending to file:', err);
// //   } else {
// //     console.log('Data has been appended to the file');
// //   }
// // });

// // // const os =require('os');
// // // var user=os.userInfo(os);
// // // console.log(user);
// // // console.log(user);



// const fs = require('fs')

// const content = 'Some content!'

// try {
//   fs.writeFileSync('text.txt', content)
//   //file written successfully
// } catch (err) {
//   console.error(err)
// }

// console.log(fs.readFileSync("text.txt", "utf8"));




// console.log(a);
// const a ='c';

// console.log(b);
// let b ='c';{
//   let b ='c'
// // }


// console.log(c);
// var c ='c';
// {
//   var c="kayu";
// }
// console.log(c);   

// let name = 'kayu';
// name = 'rithu';
// console.log(name);
const hobbies =['sports','cooking'];
const copiedhob =[...hobbies];

if(hobbies=== copiedhob){
  console.log('same')
}  else {
  console.log('not same');
}
console.log(hobbies);
console.log(copiedhob);