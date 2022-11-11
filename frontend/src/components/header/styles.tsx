import styled  from "styled-components"
import { ThemeType } from "../../interfaces/theme"

export const StyledHeader = styled.header<{theme: ThemeType}>`
    transition: .5s;
    background-color: ${({ theme }) => theme.header};
    width: 100vw;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
`

export const ButtonTheme = styled.button`
    transition: .5s;
    background-color: transparent;
    color: ${({theme}) => theme.textHeader}

`