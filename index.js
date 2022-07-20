
// function sum () {    //описание функции 
//     return 1;  // то что возвращает функия 
// }
// sum() // использование функции 





// function sum (number1, number2) {     //передали аргументы функции 
//     return nuber1 + number2; 
// }

// const b = sum(24, 45); 


//передаете имя и возвращается привет запятая имя 



// function namesend (argument1)  {
// return alert('привет ,' + argument1);
// }


// namesend('any text');


// function sendmyname (name = ' pavel'){
//     return alert(`hello, ${name}`);
// }

// sendmyname();

//функия переводит часы в минуты 

// const hoursToMinutes = (hours) => {   //это другой способ написания функции здесь отличается область видимости 
//     return hours * 60 

// }
// alert(hoursToMinutes(2));

// const getMinutes = (hours) => hours * 60; 


//

// const hoursToMinutes = (hours) => {
//     return hours * 60 
// }
// let userHours = prompt ('Введите часы'); 

// if (typeof userHours === 'Number') {
//     alert(hourseToMintes(userHours));
    
// } else 
// alert ('не верно');


// const hoursToMinutes = (hours) => {
//     if(typeof hour === 'number'){
//         return hours * 60
//     }else {
//         return 'введите число'
//     }
// }; 


//я передаю строчку она тип строчки, какое ли я название не ввёл оно должно вернуть тип данных  строчку тру фолс и посмотреть что возвращает 


// const getTypeOfData = (text) => {
//    return typeof text ; 
    
//     } 

// alert(getTypeOfData(null));



// функция пр;инимает 1 и 2 и возвращет меньшее 

// const getLowOfNumber = (number1 , number2) => {
//       if (number1>number2){
//         return number2
//       }else return number1 
// }

// alert(getLowOfNumber(22, 33));'

// let i = 0;
// while (++i < 5) alert( i ); 

// let i = 0;
// while (i++ < 5) alert( i );

// string browser; 
// ;
// if (browser = Edge) {
//   alert ('you've got the Edge)
  
// }
 
// function fulllName(firstName, lastName) {
//   alert (firstName+ ' '+ lastName);
// }

// fulllName ('Павел', 'Гапонов');

// function checkAge(age) {
//   if (age > 18) return true ;
//   else return false; 
  
// }
// let age = Number(prompt('введите ваш возраст'));
// age = checkAge(age);

// if (age) {
//   alert('доступ разорешен')
// } else {
//   alert('доступ заврещен')
// }
// Напишите функцию pow(x,n), которая возвращает x в степени 
// n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// function ask (question, yes, no) {
//     if (confirm(question)) yes ()
//     else no()
// }

// function showOk() {
//     alert('вы согласны');
// }
// function showCancel() {
//     alert ('вы отменили выполнение');


// }

// ask(
//     'вы согласны',
// function () { alert ('вы согласны')},
// function () { alert ('вы отменили выполнение')})

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   ); 


// let double = n => n*2; 
// alert ( double(10));