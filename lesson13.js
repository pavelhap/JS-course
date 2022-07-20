
let animal = {
    eats:true
}

let rabbit ={
    jumps: true
}


// берет это свойство из энимал (типо наследование)
//const array =[];
//например выводит эррей и открое м он наследует все методы
// find concat every entries и так далее
//prototype классы методы для всех методов обхьектов вновь созданных

//proto это объект

// proto nature proto 
// в последнем вызвать самое первое свойство 


let jetplane = {
    fly: true
}
let ship = {
    swim: true
}
let bus = {
    drive: true
}

bus.__proto__=ship;
ship.__proto__=jetplane; 

console.log(bus.fly);

const animal1 = new Animal ()
const animal2 = new Animal()
Animal.prototype = natiu