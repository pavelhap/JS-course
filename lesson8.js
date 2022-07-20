let user = {
    name: "John",
    age: 30, 

    // sayHi: function(){

    //     console.log(this.name)
    // }
}

// user.sayHi = function () {
//     console.log(this.name)
//     console.log(user.name)
// }

// // user.sayHi();


// const admin = user; 

// user = null; 

// console.log(admin.sayHi())



let user = {name: 'John'};
let admin = {name: 'Admin'};

function sayHi(){
    console.log(this)
}

console.log(sayHi());

user.f = sayHi;
// admin.f = sayHi;

user.f();
// admin.f();

создавать функцию ключевое слово this console.log + имя
объект любой

const user ={name: 'pavel', age:25}

function sayHi() {
    console.log('hello'+ ' ' + this.name)
}


user.f = sayHi;

user.f();




function User(name) {
    this.name = name;
    this.isAdmin = false; 

    this.sayHi = function(){
        console.log(this.name)
    }
}

let user = new User('John'); 




// const array = ["John", "Vova"] //естьм ассив имен сделать массив объектов

// //[{name: 'John', isAdmin: False}]

// const newArray = array.forEach((item) => {
//     let user = new User(item)
//     user.sayHi()

// })


// console.log(newArray);
