;// class User {
//     constructor(name) {
//       this.name = name;
//     }
//     sayHi() {
//       alert(this.name);
//     }
//   }
  
//   let user = new User("Вася")
//   user.sayHi();
  
//   let user1 = new User('Pavel')

//   user1.sayHi();


  
class TodoList  {
  constructor(){
      this.todo =[]
  }
  //принимает объект для добавления в массив
  addToList(text) {
      //подумать как сгенерировать уникальный id
      // const obj = {text: text, date: Date.now(), id: 1}
      //можно удалить текст и написать здесть text = prompt();
      this.todo.push({text:text, date: Date.now(), id: Math.floor(Math.random()*100) })
      this.render();
  }
  removeFromList(id) {
      // this.todo.splice(this.todo.map(item => item.id).indexOf(id), 1);
      
      let index = this.todo.map(item => item.id).indexOf(id);
      if (index != -1) this.todo.splice(index,1)
      console.log(index);
      this.render();
  }
  sort() {
    this.todo.sort(function(a, b) {
      return (b.date - a.date)})
      this.render();

  }
  //должен вернуть все тудушки отсортировать по дате от больше к меньшему 
  clear() {
    this.todo.splice(0,this.todo.length)
    this.render();

  }
  render(){
    const list = document.getElementById("list");
  

    //каждый раз будем вызывать когда делаем остальные, нужно 
    //сначала очистить заново перерирсовать очистим опять рисуем 
  }
  //очистить тудушки сделать начальное значение удалить вообще все
}
let test = new TodoList();


// test.addToList();
// test.addToList('Go to Gym');

// test.addToList('Go home');

// test.removeFromList(5);

//Math.floor(Math.random()*100) Date.now() + Math.random()
// console.log(test);

// todo.addToList({task: 'do the job', date: Date.now()})
//второй методом вызываем эттудулист берет объект и засовывает его в массив но при этом создает 


//lдобавить отображение 

//каждый раз при изменения списка записывать новую информацию 
//например добавили удалить очистить только сам 
//появляется добавить лист если от
//