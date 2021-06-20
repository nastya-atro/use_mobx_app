import { makeAutoObservable } from "mobx";


class Todo {
    todos = [
        { id: 4855, title: 'First title', completed: false },
        { id: 74378439, title: 'Second title', completed: false },
        { id: 3637, title: 'Third title', completed: false },
        { id: 484, title: 'Fourth title', completed: false }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addNewList(newTitle) {
        this.todos.push({ id: Date.now(), title: newTitle, completed: false })
    }

    deleteNewList(id) {

        this.todos = this.todos.filter((t) => t.id !== id)
    }

    completed(id) {
        this.todos = this.todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)
    }

    fetchTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json =>
                this.todos = [...this.todos, ...json ]
            )
    }
}

export default new Todo()