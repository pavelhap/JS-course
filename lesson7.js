
// const answer = array.find(item ) => {
// if(item.id === 2)
// return true
// }


// const array = [
//     { id: 2, name: 'Вася' },
//     { id: 3, name: 'Петя' },
//     { id: 4, name: "ваня" }
// ]



// const getObject = (argumentId) => {
//     const answer = array.find((item) => {
//     if (item.id === argumentId) {
//         return true
//     }
// })

// return answer
// }


// console.log(getObject(2))



//найти любой из этих айди функцией консоле лог ансвер, в ансвере объект который мы искали, айди 4 имя ваня например. переписать на функию который должен что-то вернуть,
//функция которая принимает 1,2 ,3, 4 и вернет объект 

//есть массив есть имена, есть какой то скоре, нужно найти людей у которых скоре больше 10, вернуть массив объектов, у которых скор больше 10 с имена и скорами


const array = [
    { name: 'Вася', score: 10},
    { name: 'Ivan', score: 5},
    { name: 'Peter', score: 12},
    { name: 'Konstantin', score: 4},
    { name: 'Ivan', score: 22},
]


// const getObject = (argumentId) => {
//     const answer = array.filter((item) => {
//     if (item.score > argumentId) {
//         return true
//     }
// })

// return answer
// }
// console.log(getObject(10))

//>= 4 и меньше или равно 12 


//     const answer = array.filter((item) => {
//     if (item.score >=4 && item.score<= 12 ) {
//         return true
//     }
// })

// console.log(answer);

// const answer = array.map((item) => {
// //   return item.score
// return {name: item.name, score: item.score+10}
// })

// console.log(answer);

const newArray = [
    {name: 'Pete', surname:'Ivanov', id: 1},
    {name: 'Viktor', surname:'Petrove', id: 2},
    {name: 'Pete', surname:'Viktorovna', id: 3},
    {name: 'Pete', surname:'Viktorovna', id: 4},
    
]
// переделать на объект который будет содержать фулл наму и айди фулл нейм состоит из нейм и сюрнейм


// const answer = newArray.map((item) => {
//     //   return item.score
//     return {fullName: `${item.name} ${item.surname}`, id: item.id}
//     })
    
//     console.log(answer);


const sortArray = [
    5, 10, 15, 20, 25
]


sortArray.sort((a,b) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }


})


const sortObjects = [
    {score:22}, {score:12}, {score:30}, {score:5}
]

console.log(sortObjects.sort((item1, item2) => {
    if (item1.score < item2.score) {
    return -1
    }
    if (item1.score > item2.score) {
    return 1
    }
}))
