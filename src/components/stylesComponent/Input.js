import styled from 'styled-components'

const StyledInput = styled.input`
width: 100%;
padding: 10px;
margin-top: 10px;
background-color: ${props =>props.backColor || props.theme.color.primary};
border: none;
&:focus {
    outline: none
}

`

const Input = (props) => {
    return (
        <StyledInput {...props}/>
    )
}

export default Input