import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../interfaces/theme";

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        transition: .5s;
        background-color:${({ theme }) => theme.body};
        font-family: 'Inter', sans-serif;
    }

    button{
        border: none;
        cursor: pointer;
    }
    input{
        transition: .5s;
        background-color:${({ theme }) => theme.buttonBackground};
        color:${({ theme }) => theme.buttonColor}
    }
`