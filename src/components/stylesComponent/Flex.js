import styled from 'styled-components'

const SteledFlex = styled.div`
display: flex;
flex-direction: ${props =>props.ditection ||'row'};
align-items:  ${props =>props.align ||'stretch'};
justify-content:  ${props =>props.justify ||'stretch'};
margin:  ${({margin}) => margin || '0'};

`

const Flex = (props) => {
    return(
<SteledFlex {...props}/>
    )
}

export default Flex