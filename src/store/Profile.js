import axios from "axios"
import { makeAutoObservable } from "mobx"

class Profile {
    profile = null

    constructor() {
        makeAutoObservable(this)
    }

    getProfile(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/16364`)
        .then(res=> this.profile = res.data )
    }
}

export default new Profile()