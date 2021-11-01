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

// #5 & #6

// const arr = ['x','xx','xxx','xxxx','xxxxx','xxxxxx'];

// function arrayFill(num){
//     arr = [];
//     for(let i = 0; i < num;i++){
//         arr.unshift('x'),
//         arr.push('x');
//     }
//     console.log(arr);
// }
// arrayFill(5);


// const array = [1,22,333,4444,55555];

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
const array = [7,3,4,5,6,10,12,0]

const result = array.reduce(function(accum,item,index,array){
    arr = [];
    const sum = accum + item;
    for(let i = 0;i < array.length;i++){
        if (accum < 10) arr.push(item);
    }

    return sum
})
console.log(arr.length)
console.log(result);