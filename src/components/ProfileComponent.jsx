import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import profile from './../store/Profile'
import Input from './stylesComponent/Input';
import Button from './stylesComponent/Button';

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
            <Button onClick={() => { setVisibleEdit(!visibleEdit) }}>Change profile</Button>
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
                    <Input  placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }}></Input>
                    <div>
                        <Input backColor={'#FFE4B5'} placeholder='vk' value={vk} onChange={(e) => { setVk(e.target.value) }}></Input>
                    </div>
                    <Input backColor={'#FFEFD5'} placeholder='github' value={github} onChange={(e) => { setGithub(e.target.value) }}></Input>
                    <div>
                        <Button outline color={'red'}  onClick={changeInfo}>Save</Button></div>
                </div>
            }
            {profile.isLoading ? <div>Saving process...</div> : null}
        </div>
    )
})
