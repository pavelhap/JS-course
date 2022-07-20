// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. 
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]




// let arr = ['Html', 'Javascript', 'CSS', 'HTML'];


// let newarr = arr.slice()


// newarr.sort((a,b) => {
    
//     if (a > b) {
//         return -1
//     }
//     if (a < b) {
//         return 1
//     }
 
// })

// console.log(newarr)


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// // let names = /* ... ваш код *
// // alert( names ); // Вася, Петя, Маша

// let newArr = [];

// users.map(function(item) {
//     newArr.push(item.name);
// })
// console.log(newArr);


// const array = [
//     ['a', 2],
//     ['b', 2],
//     ['c', 3],
//     ['d', 4]
// ]

// const newarray = array.map((item) => {
// return  { [item[0]]: item[1]
// }
    
// })

// console.log(newarray)
// вернуть массив обхектов {'a': 2}, {"b":2}, {"c":3}



// const array = [{a:1},{a:2},{a:3}] ;

// const result = array.reduce((acc, item) =>{
// return acc + item.a
// }, 0)

// console.log(result);


// У вас есть массив объектов user, и в каждом из них есть 
// user.name. Напишите код, который преобразует их в массив имён.



// let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let result = users.map((item) => {

// return item.name
// })
// console.log(result)


// У вас есть массив объектов user, и у каждого из объектов 
// есть name, surname и id.

// Напишите код, который создаст ещё один 
// массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.




// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((item) => {

// return {fullname:`${item.name} ${item.surname}`, id: item.id}

// })


// console.log(usersMapped)

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];


// // теперь: [vasya, masha, petya]
// // alert(arr[0].name); // Вася
// // alert(arr[1].name); // Маша
// // alert(arr[2].name); // Петя


// arr.sort((a, b) => a.age > b.age ? 1 : -1);

// console.log(arr);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// function getAvarege(arr) {
//     return arr.reduce((acc, item) => {
//         return acc + item.age
//         }, 0)/ arr.length
    
// }



// console.log(getAvarege(arr));

// console.log(getAvarege)

// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//   };
  
//   user.go()

  
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];


// function countSheeps(arrayOfSheep) {
//     return (arrayOfSheep.filter((item) => item == true).length
//     )
// }

// console.log (countSheeps(array1))
  
// function sumTwoSmallestNumber(numbers) {
//     let sortedNumbers = numbers.sort((item1, item2) => {
//         if (item1< item2) {
//             return -1
//             }
//             if (item1 > item2) {
//             return 1 
// }})
// return sortedNumbers[0]+  sortedNumbers[1]
// }

// console.log(sumTwoSmallestNumber([1,5,2,3,4,5,6,7,8,9]));


// let user = {
//     name: "Джон",
//     age: 30
// }

// user.sayHi = function() {
//     alert(this.name)
// }

// user.sayHi();


// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Вася");
  
//   alert(user.name); // Вася
//   alert(user.isAdmin); // falses


// function lovefunc(flower1, flower2){
//   if (flower1 % 2 == 0 && flower2 % 2 !=0) {
//     return true
//   }
//   if (flower2 % 2 == 0 && flower1 % 2 !=0) {
//     return true
//   }
//   else return false


// }

