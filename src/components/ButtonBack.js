import React from 'react'
import { BiArrowBack as ArrowBack } from "react-icons/bi"
import styled from "styled-components"

const StyledArrowBack = styled(ArrowBack) `
    color: #fff;  
    transition: 0.2s;
    font-size: 30px;    
    &:hover {
        cursor: pointer;        
        transition: 0.2s;
        transform: scale(1.1);
    }
    @media (max-width: 850px) {    
        font-size: 25px;
        padding-left: 0.5vw;
    }
    @media (max-width: 520px) {    
        font-size: 20px;
        padding: 1vw 0 0 1vw;        
    }
`
const Button = styled.button `
   position: absolute;
   top: 1vw;
   left: 6vw;
   background-color: transparent;
   border: none;
   z-index: 400;  
   &:hover {
        cursor: pointer;        
    }
    &:focus {
        outline: none;    
    }
    @media (max-width: 850px) {    
        left: 0;
    }
`

const ButtonBack = ({ handleClick }) => {  
    return (
        <Button >
            <StyledArrowBack onClick={handleClick}/>
        </Button>
    )
}

export default ButtonBack
