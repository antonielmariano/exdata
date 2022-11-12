import styled, { css } from "styled-components"
import { ThemeType } from "../../interfaces/theme"

const medias = [
    {
        break: 320,
        padding: "0px 20px",
    },
    {
        break: 768,
        padding: "0px 115px",
    }
]

export const StyledHeader = styled.header<{ theme: ThemeType }>`
    transition: .5s;
    background-color: ${({ theme }) => theme.body};
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.header};

    ${medias.map((media)=> css`
        @media screen and (min-width: ${media.break}px){
            padding: ${media.padding};
        }
    `)}

`

export const ButtonTheme = styled.button`
    transition: .5s;
    background-color: transparent;
    color: ${({ theme }) => theme.text};

`

export const LogoStyled = styled.img`
    transition: .5s;
    width: 120px;
    height: 120px;
`