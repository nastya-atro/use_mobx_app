import { observer } from 'mobx-react-lite'
import counter from './../store/Counter'

export const CounterComponent=observer(()=>{
    return(
        <div>
        <div>{counter.total}</div>
            <button onClick={()=>counter.decrement()}>Decrement</button>
            <button onClick={()=>counter.increment()}>Increment</button>
        </div>
    )
})