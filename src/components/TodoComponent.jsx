import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import todo from './../store/Todo'
import Input from './stylesComponent/Input';
import Button from './stylesComponent/Button';
import Title from './stylesComponent/Title';

export const TodoComponent = observer(() => {
    const [valueNewList, setValueNewList] = useState('')
    return (
        <div>
            <Title backColor={'#FFFACD'}>ToDo List</Title>
            <Button  onClick={()=>{todo.fetchTodo()}}>Fetch todo</Button>
            
            {todo.todos.map(t => <div key={t.id}>

            <input  type='checkbox' value={t.completed} onChange={() => todo.completed(t.id)} />{t.title}

            <Button primary back={'#FFDAB9'} color={'white'} onClick={() => todo.deleteNewList(t.id)}>Delete</Button>


        </div>)}

            <Input  backColor={'#FFEFD5'}  type='text' placeholder='newTitle' value={valueNewList} onChange={(e) => { setValueNewList(e.target.value) }}></Input>
            <Button  onClick={() => todo.addNewList(valueNewList)}>Add</Button>
        </div>
    )
}
)
