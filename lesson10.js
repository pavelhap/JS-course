// document.addEventListener("DOMContentLoaded"), () =>{

// const button = document.getElementById("button");
// console.log(button);
// }

const button = document.getElementById("button");
const body = document.getElementById("body");
//кнопка адд ивент лисенер слушает клик и выполняет на клик определенунную функцию 

button.addEventListener('click', (event) => {
    
    button.style.background='gray';
    button.remove();

    console.log(event);
})




// 'button', 'ul', 'li', 'nav'

const createdButton = document.createElement('button');
createdButton.textContent = 'кнопка';

body.appendChild(createdButton);

createdButton.remove();



// console.log(a);


// class HtmlGenerator {
//     constructor(element){
//       this.createdElement = null;
//     }
//     createElement(text){
//         this.createdElement = document.createElement(this.element)

//         if(text) {
//             this.createdElement.textContent = text
//         }
  
//     }
//     renderElement(){
//         body.appendChild(this.createdElement)
  
//     }
//   }
  
//   const button2 = new HtmlGenerator('button');
//   button2.createElement('knopka123');
//   button2.renderElement();

