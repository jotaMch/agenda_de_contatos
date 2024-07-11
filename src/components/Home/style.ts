import styled from "styled-components"

export const Main = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .flex{
        width: 90%;
        margin: 0 auto;
        z-index: 2;
        small{
            border-radius: 6px;
            border: 1px solid #00f20a;
            width: 120px;
            padding: 4px;
            text-align: center;
            font-weight: bolder;
            text-transform: uppercase;
            color: #00f20a;
        }
        h2{
            margin: 24px 0 0;
            color: #fff;
        }
        h1{
            margin-top: 0;
            font-weight: bold; 
            background: linear-gradient(to right,  #00f20a, #00ceff 5%, #8d82ff 40%, #ec15ec);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            letter-spacing: 2px;                
            font-size: 3.2em;
            line-height: 1.1;
        }
        button{
            background-image: linear-gradient(to right, #00f20a, #24f329, #35f33a, #43f448, #4ef454, #51f457, #54f35b, #57f35e, #54f25b, #51f158, #4eef55, #4bee52);
            color: #111;
            font-weight: bold;
            border: none;
            width: 160px;
            height: 46px;
            border-radius: 30px;
            margin-top: 22px;
        }
        p{
            color: #fff;
            margin-top: 40px;
            span{
                color: #00f20a;
            }
        }
    }

`;