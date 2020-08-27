import styled from 'styled-components'

export const StyledDisplay = styled.div`
    padding: 8px;
    border-radius: 25px;
    width: 100%;
    margin-bottom: 20px;
    background-color:  #0E0000;
    -webkit-box-shadow: 2px 2px px 4px rgba(227,11,11,1);
    -moz-box-shadow: 2px 2px 4px 4px rgba(227,11,11,1);
    box-shadow: 2px 3px 4px 2px rgba(227,11,11,1);
    color : ${props => props.gameover ? 'red' : 'white'};

    
    @media screen and (max-width: 700px) {
        font-size: 10px;
        padding: 3px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-color:  #0E0000;
        -webkit-box-shadow: 2px 2px px 4px rgba(227,11,11,1);
        -moz-box-shadow: 2px 2px 4px 4px rgba(227,11,11,1);
        box-shadow: 2px 3px 4px 2px rgba(227,11,11,1);
        color : ${props => props.gameover ? 'red' : 'white'}
        font-size: 5px;
    }
`