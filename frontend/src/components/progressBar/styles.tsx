import styled from "styled-components";

export const SectionStyled = styled.section`

  display: flex;
  flex-direction: column;
  gap: 20px;
  
  .ProgressRoot {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width: 300px;
    height: 25px;
    transform: translateZ(0);
  }

  .ProgressIndicator {
    background-color: ${({theme})=> theme.backgroundProgress};
    width: 100%;
    height: 100%;
    transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  }
`