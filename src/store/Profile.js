import axios from "axios"
import { makeAutoObservable } from "mobx"

const instanse = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "e33a9b28-32d1-4022-81b8-0bd4ba992caa" },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

class Profile {
    profile = null
    isLoading=false

    constructor() {
        makeAutoObservable(this)
    }

    getProfile(){
        instanse.get(`https://social-network.samuraijs.com/api/1.0/profile/16364`)
        .then(res=> this.profile = res.data )
    }

    changeProfile= async(newInfo)=>{
        this.isLoading=true
        const res= await instanse.put(`profile`, newInfo)
        this.isLoading=false
        if(res.data.resultCode===0){
            this.getProfile()
        } else{
            console.log('error')
        }
    }
}

export default new Profile()