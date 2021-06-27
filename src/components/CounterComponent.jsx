import { observer } from 'mobx-react-lite'
import counter from './../store/Counter'
import Title from './stylesComponent/Title';
import Button from './stylesComponent/Button';



export const CounterComponent=observer(()=>{
    return(
        <div>
        <Title backColor={'#F0E68C'}> {counter.total} </Title>
            <Button  onClick={()=>counter.decrement()}>Decrement</Button>
            <Button outline onClick={()=>counter.increment()}>Increment</Button>
        </div>
    )
})