import React from 'react'

import { StyledActionButton } from './styles/StyledActionButton'

const ActionButton = (props) => {
    return (
        <StyledActionButton onClick={props.move}>
            {props.children}
        </StyledActionButton>
    )
}

export default ActionButton
