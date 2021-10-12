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
        todoDiv.classList.remove("todo-color")
        dateDiv.classList.remove("todo")
        dateDiv.classList.remove("todo-color")
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
        btn.classList.add("btn-todo-color")
        btn.addEventListener("click", ()=>{this.done(btn)})
        return btn
    }

    createDiv(){
        let div = document.createElement("div")
        div.classList.add("todo")
        div.classList.add("todo-color")
        return div
    }

    done(btn){
        let todo = btn.parentElement
        todo.classList.remove("todo-color")
        todo.classList.add("done-color")
        btn.removeEventListener("click", ()=>{this.done(btn)})
        btn.addEventListener("click", ()=>{this.notDone(btn)})
        btn.classList.remove("btn-todo-color")
        btn.classList.add("btn-done-color")
    }
    
    notDone(btn){
        let todo = btn.parentElement
        todo.classList.remove("done-color")
        todo.classList.add("todo-color")
        btn.removeEventListener("click", ()=>{this.notDone(btn)})
        btn.addEventListener("click", ()=>{this.done(btn)})
        btn.classList.remove("btn-done-color")
        btn.classList.add("btn-todo-color")
    }
}