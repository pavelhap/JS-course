class TodoList {
    constructor() {
        this.todo = []
    }
    addToList(text) {
        //подумать как сгенерировать уникальный id const obj = {text: text, date: Date.now(), id: 1} можно удалить текст и написать здесть text = prompt();
        this.todo.push({ text: text, date: Date.now(), id: Math.floor(Math.random() * 100) })
        this.render();
    }
    removeFromList(id) {
        // this.todo.splice(this.todo.map(item => item.id).indexOf(id), 1);
        let index = this.todo.map(item => item.id).indexOf(id);
        if (index != -1) this.todo.splice(index, 1)
        this.render();
    }
    sort() {
        this.todo.sort(function (a, b) {
            return (b.date - a.date)
        })
        this.render();

    }
    //должен вернуть все тудушки отсортировать по дате от больше к меньшему 
    clear() {
        this.todo.splice(0, this.todo.length)
        this.render();
        //очистить тудушки сделать начальное значение удалить вообще все

    }
    render() {

        //каждый раз будем вызывать когда делаем остальные, нужно 
        //сначала очистить заново перерирсовать очистим опять рисуем 
    }
}
