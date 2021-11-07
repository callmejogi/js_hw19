// #1
//  const arr = ['a','b','c','d'];

// arr.splice(4,0,'a+b');
// arr.splice(5,0,'c+d');
// arr.splice(0,4);
// const result = arr.join(',');
// console.log(result);

// #2
// const arr = [2,5,3,9];

// const result = arr.reduce(function(accum,item,index,array){
//     const num1 = array[0] * array[1];
//     const num2 = array[2] * array[3];
//     return num1 + num2;
// });
// console.log(result);

// #3

// const arr =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

// console.log(arr[1][0]);

// #4

// const object = {
//     js:['jQuery','Angular'],
//     php:'hello',
//     css:'world'
// }

// console.log(object.js[0]);

// #5 

// function arrayFill(num = 5){
//     const arr = [];
//     let symb = 'x';
//     for(let i = 0; i < num;i++){
//         arr.push(symb);
//         symb += symb[0];

//     }
//     return arr;
// }
// console.log(arrayFill());

//Task 6
// function arrayFill(num){
//     const arr = [];

//     for(let i = 1; i < num ;i++){
//         let symb = '';
//         for(let j = 0; j < i; j++){
//             symb += i;
//         }
        
//         arr.push(symb)
//     }
//     return arr;
// }
// console.log(arrayFill(10));


// №7

// function arrayFill(item,number){
//     arr = [];
//     for(let i = 0;i < number;i++ ){
//         arr.push(item)
//     }
//     console.log(arr);
// }

// arrayFill('y',10);
// arrayFill('x',5);

// #8

// const array = [9,3,4,5,6,10,12,0];

// Vol.1
// function getSumFirstElems(arr){
//     let sum = 0;
//     let result = 0;
//     for (let i = 0 ; i < array.length; i++){
//         if(sum > 10) break;
//         sum += array[i];
//         result += 1; 
//     }
//     return result;
// }

// console.log(getSumFirstElems(array));

// vol.2
// let a = array.reduce((accum,item) => {
//     if(accum.sum > 10) return accum;

//     accum.sum += item;
//     accum.result += 1;
//     return accum;
// },{sum:0,result:0}).result;

// console.log(a);

// Task 9

// const arr9 = [1,5,3,7,8,9,11,2];

// function inplaceReverse(arr) {
//     for (let i = 0; i < arr.length - 1;i++) {
//       arr.splice(i, 0, arr.pop());
//     }
//     return arr;
//   }
  
// console.log(inplaceReverse(arr9));

// вариант решения в новом массиве,чтоб не изменять изначальный
// let getReversedArr = (array) => {
//     const arr = [];
//     for(let i = arr9.length - 1; i > 0;i--){
//         arr.push(array[i]);
//     }
//     return arr;
// };

// console.log(getReversedArr(arr9));


// Task10

// const arr10 = [[1, 2, 3], [4, 5], [6]];

// let result = arr10
//     .reduce((acc,item) => {
//         return acc.concat(item);
//     }, [])
//     .reduce((acc,item) => {
//         return acc += item;
//     },0)

// console.log(result)

// Task 11

const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// let sum = arr11.flat(2).reduce((acc,item) => acc += item, 0);

// console.log(sum)

let a = arr11
    .reduce((acc,item) => {
        return acc.concat(item);
    },[])
    .reduce((acc,item) => {
        return acc.concat(item);
    },[])
    .reduce((acc,item) => {
        return acc += item;
    },0)

    console.log(a);