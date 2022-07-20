

//имя животного и это животное может говорить 


// function Animal(name) {
//     this.name = name;
//     this.sayHi = function(){
//         console.log(this.name)
//     }
// }

// let animal1 = new Animal('pig'); 

// animal1.sayHi()

// reaad читает 2 числа, sum сумириует 2 числа, 
//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.


// function Calculator() {
//    this.read = function() {
//     this.number1  = Number(prompt('введите число 1'));
//     this.number2 = Number(prompt('введите число 2'));
//    }
//    this.sum = function() {
//     return this.number1 + this.number2;
//    }
//    this.mul = function() {
//     return this.number1 * this.number2;
//    }
// }

// let setnum1 = new Calculator(); 

// setnum1.read();

// console.log(setnum1.sum());

// setnum1.mul();



// class User {
//     constructor(name){
//         this.name = name
//     }
//     sayHi() {
//         console.log(this.name)
//     }
// }
// const user = new User('Ivan');

// class Calculator {
  
//     read() {
//         this.number1  = Number(prompt('введите число 1'));
//         this.number2 = Number(prompt('введите число 2'));

//     }
//     sum() {
//         return this.number1 + this.number2
//     }
//     mul() {
//         return this.number1 * this.number2
//     }}

    


// let test = new Calculator();

// test.read();

// test.sum();

// console.log(test.sum)
// console.log(test)

/// создать класс ту ду лист 


// class TodoList {} {
//     construuctor(){
//         this.todo =[]
//     }
//     //принимает объект для добавления в массив
//     addToList(text) {
//         //подумать как сгенерировать уникальный id
//         const obj = {text: text, date: Date.now(), id: 1}
//     }
//     removeFromList(id) {
//         //удалить из массива по id
//     }
//     sort() {}
//     //отсортировать по дате от больше к меньшему 
//     clear()
//     //очистить тудушки сделать начальное значение 
// }

// this.todo = []

// todo.addToList({task: 'do the job', date: Date.now()})//второй методом вызываем эттудулист берет объект и засовывает его в массив но при этом создает 
// //какой-то айдишку 
// todo.RemoveFromList({id}) //убрать из моего листа задачу с такой айдишкой
// todo.sort() //должен вернуть все тудушки отсортированные по времени создания от большего к меньшему
// todo.clear()//очистить все тудушки удалить вообще все

// //без наследования, ест класс туду лист 
