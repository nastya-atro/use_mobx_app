import './App.css';
import { CounterComponent } from './components/CounterComponent';
import { TodoComponent } from './components/TodoComponent';
import {PofileComponent} from './components/ProfileComponent'

const App=()=> {
  return (<>
    <CounterComponent/>
    <TodoComponent/>
    <PofileComponent/>
 </> );
}

export default App;
