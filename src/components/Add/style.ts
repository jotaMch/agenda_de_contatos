import styled from "styled-components";

export const StyleFormNewUser = styled.form`
    width: 100%;
    height: 100vh;
    background-color: #111;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    padding: 50px;
    gap: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    
    input, button{
        height: 46px;
        border-radius: 8px;
        border: none;
    }
    input{
        padding-left: 6px;
        width: 100%;
    }
    button{
        background-color: #8d82ff;
        width: 48%;
        &:nth-child(2){
            width: 48%;
            background-color: #00ceff;
        }
    }
`;


export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
`;











