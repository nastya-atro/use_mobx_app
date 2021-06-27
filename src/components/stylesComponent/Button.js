import styled, {css, keyframes} from 'styled-components'


const rotateAnimation = keyframes`
0%{
    transform: rorateZ(0deg)
}
100%{
    transform: rorateZ(360deg)
}
`


const StyledButton = styled.button.attrs(props=>({
    outline: true
}))`
border: none;
padding: 10px 15px;
text-transform: uppercase;
margin-top: 10px;
&:hover{
    border: 1px solid black
}
&:hover {
    animation: ${rotateAnimation} 1s infinite linear;
}


${props => props.primary && css`
      background-color: ${props => props.back || '#FFDAB9'};
      color: ${props => props.color || 'white'};
`}

${props => props.outline && css`
      background-color: ${props => props.back || '#FFFFE0'};
      color: ${props => props.color || 'black'};
      border: 1px solid ${props => props.color ||'black'}

`};

`

const LargeButton = styled(StyledButton)`
font-size: 20px
`

const Button = (props) => {
    return (
        <StyledButton {...props}/>
    )
}

export default Button