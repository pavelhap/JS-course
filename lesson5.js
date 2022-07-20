// let arr = new Array() первый вариант создания массива
// let arr = [] второй вариант практически всегда используется

// let fruits = ["Первый", "Второй", "Третий"];

// alert(fruits);

// fruits.push('четвертый');

// // for (let i = 0; i < fruits.length; i++) {
// //     alert(fruits[i]);

// // }

// for (let fruit of fruits) {
//     alert(fruit);
// }



// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// alert(matrix[1][1]);\
// 


// const object = { name: "Ivan"} //создание объекта, массив делаем [] квадратными скобками, а объект {}; в объекте нет своих индексов у каждого есть ключ 

// object['name'] // в квадратных скобках мы можем писать различные значения, пишем в [] скобках переменные функии, без скобок обычное выражение 
// object.name // 

// object.surname = 'Ivanov';// чтобы добавить мы используем новый ключ surname

//создать объект с именем возрастом и вывести только возраст 


// function getUserData(name, age) {
//     const UserData = { name: [prompt('введите имя')], age: [prompt('введите возраст')] }
//     return UserData;

// }

// const object = getUserData(); // или можно сразу вывести getUserData().age

// alert(object.name);



// const string = object.name + object.age; 




//был  вопрос как вывести, в итоге прировнять.


// const myNameAge = { name: "Pavel", age: "25" };

// alert(myNameAge.age);

// const obj = { fruit: 'Banana', name: "vova", age: 30};

// const name = "name";

// for (key in obj){

//     console.log(obj[key]) // чтобы получить значение 
//     console.log(key) // получить ключи 
// }



// const salaries = { Ann: 500, Anton: 1400, Tatyana: 700 };

// // let sum = 0;

// for (key in salaries){

//     sum = sum + salaries[key];
// }


// alert(sum);



// const keys = Object.keys(salaries);

// const value = Object.values(salaries);

// let sum2 = 0; 

// for (let index = 0; index < value.length; index++) {
//     sum2 = sum2 + value[index];

// }
// alert(sum2);

// for (let i = 0, i < keys.length, i++){
//     salaries[keys[1]]
// }

// function findMaxValue(object) {
//     let sum = 0;
//     let name= ''; 
//     for (key in object) {

//         if (object[key] > sum) {
//             sum = object[key]
//             name = key
//         } 
//     } return name
// }


// alert(findMaxValue(salaries));

// sum3=0;
// for (key in salaries){

//     if (salaries[key]>sum3){
//     sum3 = salaries[key]
//     }else break
// }

// let name3 = '';
// for (key in salaries){
//     if (salaries[key]== sum3){
//         name3 = key
//     }

// }
// alert (name3 + ' '+ sum3);


// let something = prompt('введите свойство', "age");

// let users = {[something]:18, name: 'Pavel'};

// alert(users.age);


// function createUser(name, age) {
//     return {name: name, age: age
//     }
// }

// let user = createUser ('Pavel', 25);

// alert (user.age);


// 

// alert (user.name);
// user.name = 'changed name';

// alert (user.name);

// delete user.name;

// alert (user.name);

// let salaries = {
//     Pavel : 1200,
//     Nikita : 1500, 
//     Oleg : 1300, 
// }

// function sumOfKeys(object) {
//     let sum = 0;
//     for ( key in object) {
//         sum += object[key];
//     } return sum;  
// }
// alert(sumOfKeys(salaries));

// let menu = {
//     width: 200, 
//     height: 300, 
//     title: "My menu"
// };

// function multiplyNumeric(object) {
//     for (key in object) {
//         if (typeof object[key] === 'number') {
//             object[key] = object[key] * 2 
//         }
//     } return object 
    
// }

// console.log(multiplyNumeric(menu));

// let menu = {
//     width: 200, 
//     height: 300, 
//     title: "My menu"
// };

// let menuClone = {};

// for (key in menu) {
//    menuClone[key] = menu[key];
// }

// console.log(menuClone);

//