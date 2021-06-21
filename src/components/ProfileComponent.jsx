import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import profile from './../store/Profile'

export const PofileComponent = observer(() => {

    const [visibleEdit, setVisibleEdit] = useState(false)
    const [name, setName] = useState('')
    const [vk, setVk] = useState('')
    const [github, setGithub] = useState('')

    useEffect(() => {
        profile.getProfile()

    }, [])

    const changeInfo = () => {
        profile.changeProfile({
            userId: 16364,
            aboutMe: 'z',
            lookingForAJob: false,
            lookingForAJobDescription: 'z',
            fullName: name,
            contacts: {
                github: github,
                vk: vk,
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: ''
            }
        })

        setName('')
        setGithub('')
        setVk('')
        setVisibleEdit(false)
    }

    return (
        <div>
            <h3>Profile info:</h3>
            <button onClick={() => { setVisibleEdit(!visibleEdit) }}>Change profile</button>
            {!visibleEdit ? <div>

                {profile.profile && <div>
                    <div><b>Name:</b>{profile.profile.fullName}</div>
                    <div><b>Contacts:</b>
                        <div><b>vkontacte:</b>{profile.profile.contacts.vk || '-'}</div>
                        <div><b>github:</b>{profile.profile.contacts.github || '-'}</div>
                    </div>
                </div>}

            </div>
                :
                <div>
                    <input placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    <div>
                        <input placeholder='vk' value={vk} onChange={(e) => { setVk(e.target.value) }}></input>
                    </div>
                    <input placeholder='github' value={github} onChange={(e) => { setGithub(e.target.value) }}></input>
                    <div>
                        <button onClick={changeInfo}>Save</button></div>
                </div>
            }
            {profile.isLoading ? <div>Saving process...</div> : null}
        </div>
    )
})
