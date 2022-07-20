// //статические свойста методы классы


// class Person {

// }

// const person = new Person();

// //статические методы можно использовать не создавать объект

// //присваиваются самому классу а не объекту помошники, они работают на все остальные объекты функции



const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const data = Object.fromEntries(formDataEntries);

    const validated = Review.validate(data);

    if (validated) {
        reviews.addToList(data);

    }
    else {
        alert('вы ввели неправильные данные')
    }


})




class Review {
    constructor() {
        this.reviewList = []
    }
    addToList(data) {
        this.reviewList.push(data)

        this.render()

    }

    static validate(data) {
        if (data.text && data.from && (data.review <= 5 && data.review >= 1)) {
            return true
        }
        return false
    }

    render() {
     
        const HTML = this.reviewList.map(item => `<li>${item.text} ${item.review} ${item.from}</li> `).join(' ');
        document.getElementById("item-list").innerHTML = '<ul>' + HTML + '</ul>'

    }

}

const reviews = new Review();





//статический метод валидировать ревью, лист эдд стат метод валидейт
//ревью наши данные зак в стат метод и вернет тру если все поля заполнены
//и ревью от 1-5 если что-то не работает вернуть фолс
//text не пустой from не пустой review от 1 до 5


// class Review {
//     static date = new Date();
//     constructor(date, title) {
//         this.date = date
//         this.title = title
//     }
//     static createReview() {  //через слово статик мы записываем понимаем стат метод
//         return {
//             date: new Date(),
//             title: title,
//         }
//         // return new this(title, new Date()); //this это класс Ревьюб через стат метод создали объект

//     }

//     changeDate() {

//     }
// }







// // const review = Review.createReview('New Review');


// //

// // class AnotherReview extends Review{

// // }

// //создать клас артикл сделаnm

// class Article {
//     static date = new Date();

//     static compare(date1, date2) {
//         // сравнить две даты если одна больше вернуть date1, если вторая вернуть date2
//         if (date1 > date2) {
//             return date1
//         }
//         else {
//             return date2
//         }

//     }

// }




// // console.log(Article.date);
// // console.log(Article.date);
// // console.log(Article.date);
// // console.log(Article.date);
// // console.log(Article.date);
// // console.log(Article.date);

// let dateFirst;
// let dateSecond;

// // console.log(dateFirst.Article.date);