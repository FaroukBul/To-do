document.addEventListener('DOMContentLoaded', () => {
    let submitBtn = document.getElementsByClassName("submit")[0]
    submitBtn.addEventListener("click", newTodo)

    function newTodo() {
        let todo = new Todo()
        todo.submitTodo()
    }
})

class Todo {

    constructor(){
        this.textArea = document.getElementsByClassName("text")[0]
        this.date = document.getElementsByClassName("date-input")[0]
        this.box = document.getElementsByClassName("cards-container")[0]
    }

    submitTodo(){
        let todo = this.textArea.value
        let date = this.date.value.toString()
        this.createTodoBox(todo, date)
    }

    createTodoBox(todo, date){
        let box = this.createDiv()
        let todoDiv = this.createDiv()
        let dateDiv = this.createDiv()
        todoDiv.innerHTML = todo
        dateDiv.innerHTML = date
        box.appendChild(todoDiv)
        box.appendChild(dateDiv)
        let btn = document.createElement("button")
        btn.innerHTML = "Done"
        box.appendChild(btn)
        this.box.appendChild(box)
    }

    createDiv(){
        
        return document.createElement("div")
    }
}