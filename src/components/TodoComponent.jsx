import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import todo from './../store/Todo'

export const TodoComponent = observer(() => {
    const [valueNewList, setValueNewList] = useState('')
    return (
        <div>
            <button onClick={()=>{todo.fetchTodo()}}>Fetch todo</button>
            
            {todo.todos.map(t => <div key={t.id}>

            <input type='checkbox' value={t.completed} onChange={() => todo.completed(t.id)} />{t.title}

            <button onClick={() => todo.deleteNewList(t.id)}>Delete</button>


        </div>)}

            <input type='text' placeholder='newTitle' value={valueNewList} onChange={(e) => { setValueNewList(e.target.value) }}></input>
            <button onClick={() => todo.addNewList(valueNewList)}>Add</button>
        </div>
    )
}
)
