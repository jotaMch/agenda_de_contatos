import styled from "styled-components";

export const MyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 140px;
    padding: 20px 8px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.97);
    
    .flex{
        display: flex;
        justify-content: space-between;
        small{
                font-size: large;
                text-align: center;
                text-transform: uppercase;

                font-weight: bold; 
                background: linear-gradient(to right,  #00f20a, #00ceff 5%, #8d82ff 40%, #ec15ec);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                color: transparent;              
        }
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100px;
            gap: 12px;
            list-style: none;
            li{/* 
                border: 1px solid #00f20a; */
                box-shadow: 0 0 1px 0 #ec15ec;
                color: #ec15ec;
                border-radius: 4px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 4px;
                height: 28px;
                width: 28px;
            }
        }
    }
    .form-search{
        width: 90%;
        height: 50px;
        border-radius: 30px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px -0px 14px -4px #8d82ff;
        input{
            width: 90%;
            height: 100%;
            border-radius: 30px 0 0 30px;
            border: none;
            border: 1px solid #222;
            padding-left: 14px;
            @media (max-width: 767px) {
                width: 85%;
            }
        }
        button{
            width: 10%;
            height: 100%;
            border-radius: 0 30px 30px 0;
            border: none;
            position: relative;
            background-color: rgba(0, 0, 0, 0.97);
            border: 1px solid #222;
            @media (max-width: 767px) {
                width: 15%;
            }
            svg{
                color: #fff;
            }
        }
    }
`;