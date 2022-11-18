import styled from "styled-components";


export const DivCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 40px;
    font-size: 12px;
    padding: 6px;
    background-color:${({ theme }) => theme.buttonBackground};
    color:${({ theme }) => theme.buttonColor};
    border-radius: 10px;
`