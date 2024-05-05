// //using array map
// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// const fruits= array.map( (fruit) => {
//         if(fruit===' '){
//             fruit='empty string';
//         }
//         return fruit;
// })
// console.log(fruits);

// // spread operator 
// //The spread operator  denoted by three dots (...),When applied to arrays, it creates a new array by copying the elements of an existing array or by combining elements from multiple arrays. Similarly, when used with objects, it creates a new object by merging properties from one or more objects.

// //rest operator 
// // the rest operator is used for gathering function arguments into an array

// // const obj1 = {'key1': 1}

// // const obj2 = { ...obj1}

// // if(obj2 === obj1){

// // console.log('same objects')

// // }

// // else{

// // console.log('different objects')

// // }



// // const obj3 = {'key1': 1 , 'key2' : 2}

// // const obj4 = { ...obj3,"key1": 1000}



// // console.log(obj3)

// // console.log(obj4)

// // const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// // const { key1, key3} = { ...obj1}



// // console.log(key1, key3)



// //  const arr1 = ['value1', 'value2']

// // const [ val1, val2 ] = arr1



// // console.log(val1)

// // console.log(val2)


// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)
// console.log(key1);
// console.log(key3);

// promises
function printLetter(letter, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(letter);
        resolve();
      }, delay);
    });
  }
  
  printLetter('a', 1000)
    .then(() => printLetter('b', 1000))
    .then(() => printLetter('c', 1000))
    .then(() => printLetter('d', 1000))
    .then(() => printLetter('e', 1000));
  
    // async/await
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function printLetter(letter, time) {
        await delay(time);
        console.log(letter);
      }
      
      async function printSequence() {
        await printLetter('a', 1000);
        await printLetter('b', 1000);
        await printLetter('c', 1000);
        await printLetter('d', 1000);
        await printLetter('e', 1000);
      }
      
      printSequence();
      