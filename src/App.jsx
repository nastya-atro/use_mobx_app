import './App.css';
import { CounterComponent } from './components/CounterComponent';
import { TodoComponent } from './components/TodoComponent';
import {PofileComponent} from './components/ProfileComponent'
import styled from 'styled-components'
import Flex from './components/stylesComponent/Flex';

const AppWrapper = styled.div`
 width: 100%;
 margin-left: auto;
 margin-right:auto;

 min-height: 100vh;
 @media ${props => props.theme.media.phone}{
  text-align: center;
}
@media ${props => props.theme.media.tablet}{
  text-align: center;
}

`


const App=()=> {

  return (<AppWrapper>
    <Flex ditection={'row'} margin={'10px'} justify={'space-between'}> 

    <CounterComponent/>
    <TodoComponent/>
    <PofileComponent/>

    </Flex>

 </AppWrapper> );
}

export default App;
