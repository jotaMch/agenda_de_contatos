import styled from "styled-components";

export const List = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.97);
    min-height: 64px;
    padding: 0 14px;
    border-radius: 8px;
    
    .content-contact{
        width: 220px;
    }
    
    .inf{
        width: 40px;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
`;

export const UlList = styled.ul`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 18px auto;
`;

export const IconsEdit = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    svg{
        width: 28px;
        height: 28px;
    }
`;

export const Details = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 6px;
    .line-1{
        width: 30px;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
    }
    .line-2{
        width: 20px;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
    }
`;