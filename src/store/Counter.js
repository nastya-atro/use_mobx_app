import { makeAutoObservable } from "mobx"

class Counter {
    count = 0
    timer = 5

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1

    }

    decrement() {
        this.count = this.count - 1

    }
    get total() {
        return `Count+ Total=` + this.count + this.timer
    }

    
}


export default new Counter()