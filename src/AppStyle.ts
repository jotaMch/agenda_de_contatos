import styled from "styled-components"
import HongKong from "./assets/hong-kong-1990268_1920.jpg"

export const Container = styled.div`
    max-width: 960px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-image: url(${HongKong});
    background-size: cover;    
    background-attachment: fixed;
    /* &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.8));
        z-index: 1;
    } */
`;