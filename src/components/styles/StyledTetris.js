import styled from 'styled-components'


export const WrappedTetris = styled.div`
    height: 100vh;
    width: 100vw;
`

export const StyleTittle = styled.div`
    display flex;
    width : 100%;
    justify-content: center;
    margin : 0 auto;

    @media screen and (max-width: 700px) {
        margin : 30px 0 0 0;

    }
`

export const StyledTetris = styled.div`
    display : flex;
    flex-direction: column;
    width: 100%;
    max-width: 45%;
    padding: 20px 40px ;
    justify-content: center;
    border-radius : 50px;
    margin : 0 auto;
    background-color: #030202;
    
    -webkit-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);
    -moz-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);
    box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);


    @media screen and (max-width: 700px) {
        display : flex;
        flex-direction: column;
        width: 100%;
        max-width: 75%;
        padding: 20px 15px ;
        justify-content: center;
        border-radius : 10px;
        margin : 0 30px 0 20px;
        background-color: #030202;
        
        -webkit-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);
        -moz-box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);
        box-shadow: -1px 2px 8px 4px rgba(227,11,11,1);
    }
      
`
export const StyledDisplay = styled.div`
    display : flex;
    width: 100%;
    justify-content: flex-start;
    margin : 0 auto;
    
    aside {
        margin : 0 25px;
    }

    @media screen and (max-width: 700px) {
        display : flex;
        width: 100%;
        justify-content: space-between;
        margin : 0 auto;

        aside {
            margin : 0;
        }
    }
`

export const StyledControl = styled.div`
    display : flex;
    width: 50%;
    flex-direction: column;
    margin-top: 10px;

    @media screen and (max-width: 700px) {
        width: 55%;
    }
`

export const StyledLeftRight = styled.div`
    display : flex;
    padding : 0 0 10px 0;
    justify-content: center;
`

export const StyledDown = styled.div`
    display : flex;
    justify-content: center;

`
export const StyledWrapperActions = styled.div`
    display : flex;
    width: 100%;
`
export const StyledStartButton = styled.div`
    width: 55%;
    margin-top: 10px;
`