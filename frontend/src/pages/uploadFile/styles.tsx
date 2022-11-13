import styled, { css } from "styled-components";

const medias = [
    {
        break: 320,
        padding: "0px 20px",
        widthSection:90
    },
    {
        break: 768,
        padding: "0px 115px",
        widthSection:60
    }
]


export const MainStyled = styled.main`
    margin-top: 60px;
    display: flex;
    min-height: calc(100vh - 60px);
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({theme})=> theme.text};
    ${medias.map(media => css`
        @media screen and (min-width: ${media.break}px){
            padding: ${media.padding};
        }
    `)};
`

export const InputStyled = styled.input`
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.inputBackground};
    height: 100%;
    width: 100%;
    
`
export const SectionStyled = styled.section`
    display: flex;
    width: 280px;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border: dotted 1px solid;
    background-color: ${({theme})=> theme.sectionBackground};
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    ${medias.map(media => css`
        @media screen and (min-width: ${media.break}px){
            width: ${media.widthSection}%
        }
    `)}
    max-width: 750px;

    input[type="file"] {
        display: none;
    }

    label {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 250px;
        height: 100px;
        border: dotted 4px;
        border-radius: 10px;
        cursor: pointer;
    }
`

export const TextH3Styled = styled.h3`
    font-weight: 500;
`
export const TextPStyled = styled.p`
    margin-top: 10px;
    font-weight: 400;
`

export const ButtonStyled = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: ${({theme})=> theme.buttonBackground};
    color: ${({theme})=> theme.buttonColor}
`