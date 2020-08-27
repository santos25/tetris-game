import React from 'react'

import Cell from './Cell'
import {StyledStage} from './styles/StyledStage'
const Stage = ({ stage}) => {
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {stage.map((row , i) =>  row.map( (cell,i) => <Cell key={i} type={cell[0]} />))}
        </StyledStage>
    )
}

export default Stage
