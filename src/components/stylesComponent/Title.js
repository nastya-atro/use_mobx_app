import styled from 'styled-components'

const SteledCountTitle = styled.h2`
padding: 10px;
background-color: ${props =>props.backColor};

`


const Title = (props) => {
    return (
        <SteledCountTitle {...props}/>
    )
}

export default Title