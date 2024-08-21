// let arr = [ 
//     {
//         name: "lorem1",
//         id: 1,
//         sum: 0
//     },
//     {
//         name: "lorem1",
//         id: 2,
//         sum: 17
//     },
//     {
//         name: "lorem1",
//         id: 3,
//         sum: 145
//     },
//     {
//         name: "lorem1",
//         id: 4,
//         sum: 111,
//     },
// ];

// for (let i = 0; i < arr.length; i++) {
    
//     if (arr[i].id === 1) {
//     arr[i].sum += arr.reduce((acc, cur) => acc + cur.sum, 0);
//     }
// }
// console.log(arr);

// let count = 0;  
// let number = 7;

// for (let i = 0; i <= number; i++) {
//     if (number % i == 0){
//         count++;
//     }
// }

// if (count == 2) {
//     console.log("tub");
    
// }
           // tub son aniqlovchi programa

// function tubmi(son) {
//     if (son < 2) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(son); i++) {
//         if (son % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const son = parseInt(prompt("Sonni kiriting:"));

// if (tubmi(son)) {
//     console.log(`${son} tub sondir.`);
// } else {
//     console.log(`${son} tub son emas.`);
// }

       // users nomli arrey bor shuni ichidagi userlarni id si tub bo'lgan objectlarni yangi arreyga qo'shish 

// function tubmi(son) {
//     if (son < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(son); i++) {
//         if (son % i === 0) {
//             return false;
//     }
//     }
//     return true;
// }

// const users = [
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Charlie" },
//     { id: 5, name: "David" },
//     { id: 8, name: "Eve" }
// ];

// const tubUsers = users.filter(user => tubmi(user.id));

// console.log(tubUsers);

// task 3

// const users = [
//     { id: 1, name: "Alice", salary: 500 },
//     { id: 2, name: "Bob", salary: 700 },
//     { id: 3, name: "Charlie", salary: 800 },
//     { id: 4, name: "David", salary: 600 }
// ];

// const jamiMaosh = users.reduce((jami, user) => jami + user.salary, 0);

// const userIndex = 0; 

// users[userIndex].totalSalary = jamiMaosh;

// console.log(users[userIndex]);

// task 4

// const number = [ 1,2,3,4,5,6,7,8,9,];

// const uniqueNumber = number.filter((value, index, self) => {
//     return self.indexOf(value) === self.lastIndexOf(value);
// });

// console.log(uniqueNumber);

// task 5 

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 2, name: "David" },
    { id: 4, name: "Eve" },
    { id: 3, name: "Frank" }
];

const uniqueUsers = Array.from(
    new Map(users.map(user => [user.id, user])).values()
);

console.log(uniqueUsers);
