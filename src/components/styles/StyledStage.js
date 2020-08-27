import styled from 'styled-components'


export const StyledStage = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-template-rows: repeat(
        ${props => props.height},
        calc(17vw / ${props => props.width})
      );
    grid-gap: 1px;
    width : 100%;
    max-width: 48vw;
    background-color: #030202 ;
    -webkit-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);
    -moz-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);
    box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);
    
    @media screen and (max-width: 700px) {
      grid-template-rows: repeat(
        ${props => props.height},
        calc(70vw / ${props => props.width})
      );
      max-width: 52vw;
  }
`