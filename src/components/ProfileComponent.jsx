import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import profile from './../store/Profile'

export const PofileComponent=observer(()=>{

    useEffect(()=>{
        profile.getProfile()
    },[])

    return(
        <div>
            <h3>Profile info:</h3>
            {profile.profile && profile.profile.fullName }
        </div>
    )
})
