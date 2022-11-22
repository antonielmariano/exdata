import styled from "styled-components"

export const SectionGraphStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    gap: 20px;
    
`

export const DivStyled  = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`  

interface IPropsButton {
    selected: boolean;
  }

export const ButtonStyled = styled.button<IPropsButton>`
    width: 90px;
    height: 30px;
    border-radius: 10px;
    background-color: ${({selected})=> selected && "#272643" };
    color: ${({selected})=> selected && "white" };
    box-shadow: 0px 0px 1px 1px white ;
`