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
    margin-top: 60px;
    display: flex;
    min-height: calc(100vh - 60px);
    gap: 20px;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    ${medias.map(media => css`
        @media screen and (min-width: ${media.break}px){
            padding: ${media.padding};
        }
    `)};
`
export const SectionGraphStyled = styled.section`
    width: 40%;
`


export const SectionDataStyled = styled.section`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    .react-datepicker__tab-loop::after{
        content: " ";
        animation-name: fadeOut;
        animation-duration: 0.3s;
        animation-timing-function: ease;
        -webkit-animation-name: fadeOut;
        -webkit-animation-duration: 0.3s;
        -webkit-animation-timing-function: ease;
    }
    .react-datepicker {
        font-family: unset;
        margin-left: -70px;
        font-size: 0.9rem;
        border: none;
        width: 270px;
        border-radius: 10px;
        background-color: ${({theme})=> theme.body};
        box-shadow: ${({theme})=> theme.datePickerBoxShadow} ;
        color: ${({theme})=> theme.text};
        animation-name: fadeIn;
        animation-duration: 0.3s;
        animation-timing-function: ease;
        -webkit-animation-name: fadeIn;
        -webkit-animation-duration: 0.3s;
        -webkit-animation-timing-function: ease;

    }
    .react-datepicker__tab-loop{
        position: absolute;
    }
    .react-datepicker__month-container{
        width: 100%;
    }
    .react-datepicker__header{
        background-color: ${({theme})=> theme.body};
        color: ${({theme})=> theme.text}
    }
    .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    .react-datepicker__navigation-icon::before {
        border-color: ${({theme})=> theme.text};
        border-style: solid;
        border-width: 3px 3px 0 0;
        content: "";
        display: block;
        height: 9px;
        position: absolute;
        top: 6px;
        width: 9px;
        transition: 0.3s;
    }
    .react-datepicker__month .react-datepicker__month-text, .react-datepicker__month .react-datepicker__quarter-text{
        padding: 2px 0px;
        width: 80px;
        &:hover{
            background-color: ${({theme})=> theme.datePickerSelected};
            color: ${({theme})=> theme.datePickerSelectedText};
        }
    }
    .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected{
        background-color: ${({theme})=> theme.datePickerSelected};
        color: ${({theme})=> theme.datePickerSelectedText};
        
    }
`