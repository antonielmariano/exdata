import styled, { css } from "styled-components";

const medias = [
    {
        break: 320,
        padding: "0px 20px",
        widthSection: 90
    },
    {
        break: 768,
        padding: "0px 115px",
        widthSection: 60
    }
]


export const MainStyled = styled.main`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: calc(100vh - 100px);
    gap: 40px;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    ${medias.map(media => css`
        @media screen and (min-width: ${media.break}px){
            padding: ${media.padding};
        }
    `)};
    .graphs{
        display: flex;
        width: 100%;
    }
`

export const SectionTypeFilter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

`

export const SendButton = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 10px;
`

export const SelectOption = styled.select`
    position: absolute;
    right: 5px;
    font-size: 12px;
    width: 82px;
    height: 70%;
    border: 1px solid #27264361;
    border-radius: 5px;
    cursor: pointer;
`

export const SectionDataStyled = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    input{
        border: none;
        border-radius: 10px;
        height: 30px;
        padding: 0px 20px;
        width: 250px;
    }
    ul{
        display: flex;
        width: 60%;
        list-style-type: none; 
    }
    li{
        padding: 0px 10px;
        cursor: pointer;
    }
    
    
`

export const SectionListStyled = styled.section`
    width: 100%;
    height: 400px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    margin-bottom: 120px;
    ul{
        display: flex;
        justify-content: center;
        list-style-type: none;
    }
    li{
        padding: 0px 10px;
        cursor: pointer;
    }
`