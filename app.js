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
        todoDiv.classList.add("text-box")
        todoDiv.classList.remove("todo")
        dateDiv.classList.remove("todo")
        dateDiv.classList.add("date-box")
        box.appendChild(todoDiv)
        box.appendChild(dateDiv)
        let btn = this.doneBtn()
        box.appendChild(btn)
        this.box.appendChild(box)
    }

    doneBtn(){
        let btn = document.createElement("button")
        btn.classList.add("done-btn")
        return btn
    }

    createDiv(){
        let div = document.createElement("div")
        div.classList.add("todo")
        return div
    }
}