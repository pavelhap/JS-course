Math.max(); //найти макс число 
Math.min(); //мин значение
Math.round(); //окгрулить, например 2,3 - 2,5 посчитатать целое среднее
Math.ceil(); //приведет к большему целому 3.2 = 4 3.9=4
Math.floor(); //3.8 = 3, 4.2 = 4 приведет к меньшему целому
Math.sqrt(); // извлекает короень из числа
Math.pow(2,2)//возводит в степень 
Math.random();// рандом число от 0 д 1, чтобы больше получить умножаем 

Number.MAX_VALUE 
Number.Min_VALUE
Number.isNaN(); // проверяет является ли нот а намбер 
Number(1,34567).toFixed(3)// округляет до нуля, тут округлит до 1,345


//String 
// .length // длина строки 
// [0] //получить первую букву как массивы
//.split// разделяет строку на массив по указанному разделителю
//.replace('hello', 'hi')// заменяет 
//.trim()// удаляет все пробелы 

//array
// const arrat =[1,2,3]
// const result = array.every(()=>{
//     return item ===1; 
// })
//проверяет каждый элемент 

//some
// const result = array.some(()=>{
//     return item ===1; 
// }) //проверяем какое условие если входит то массив вернет тру

// .join// вклеивает наш матив встрочку 

// .reverse // чтобы строку перевести сначала надо .split .reverse потом .join

//Date

// Date.now() //дату вернет
// .getDay() // 0-6 возращает день недели 
// new Date().toLocaleDateString()//вернутся локальное время в формате в котором вы сейчас

// const object = {
//     name: 'ivan',
//     age: 30
// };
// const {name, age} = object //тоже самое что ниже, современный метод 
//создаёт переменные нейм age и тд, сразу с доступом к объекту 
// const name = object.name;
// const age = object.age;
// console.log(name);

// //
// const array = ['Ivan', 30]
// const [name, age] = array // тут переменной нейм присвоится иван, переменнной 
//age присвоится 30 и далее по очереди, ДЕСТРУКТУРИЗАЦИЯ

// const newObject = {
//     ...object, 
//     age:30
// }//добавление новый свойств старому объекту 
//надо взять изменить или добавить туда новые свойства или просто скопировать

//не только добавить но и имзенить старое свойство тогда 
// const newObject = {
//     ...object, 
//     age:30,
//     name: 'Anton',
// //добавление новый свойств старому объекту создали новый объект наполняем свойство
// }

// const newArray = [...array, 01, 123];//копируется array и в конец добавляет 01, 123 
//передаём внутрь какой-то массив и добавляем 
//можно так два массива добавить через ... сначала один потом второй



//приучали работали с синаксисом если объекты то с новым синтаксисом, если массивы то через ...




//одна п с элеентом 0, 1, 2, 3, 4,5,6,7,8,9э


//страница загрузилась прошло время что-то вышло
// setTimeout(() => {
    
// }, 1000);

let timer = 0;

// setInterval(() => {   //внутри описать код который будет обновля в хтмл 0 позволяет регулярноtimer++
// timer ++;
//     document.getElementById('timer').innerHTML = timer 
    
// }, 1000);

// setInterval(() => {   //внутри описать код который будет обновля в хтмл 0 позволяет регулярноtimer++
//     time = new Date().toLocaleTimeString();
//         document.getElementById('timer').innerHTML = time
        
//     }, 1000);


// document.getElementById('timer').innerHTML = timer;

// let increase = document.getElementById('increase'); 




// const button = document.getElementById("increase");
// button.addEventListener('click', (event) => {
//     timer ++
//    console.log(timer);
//    document.getElementById("increaseNumber").innerHTML = timer
// })

// const button2 = document.getElementById("decrease");
// button2.addEventListener('click', (event) => {
//     timer --
//    console.log(timer);
//    document.getElementById("increaseNumber").innerHTML = timer
// })

// function render() {
//     document.getElementById("increaseNumber").innerHTML = `timer`;
// }

// let string = 'Привет';

// let vowelsCount = 0;
// let arr = string.toLowerCase().split('')
// let vowels =['у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     if (vowels.includes(arr[i])){
//         vowelsCount++
//     }}

//     console.log(vowelsCount)


