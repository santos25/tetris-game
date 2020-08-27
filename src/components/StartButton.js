import React from 'react'
import { StyledButtom } from './styles/StyledStartButton'

const StartButton = ( props) => {
    return (
        <StyledButtom onClick={props.startGame} >
            {props.children}
        </StyledButtom>
    )
}

export default StartButton
