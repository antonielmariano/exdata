import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme";
import { ButtonTheme, LogoStyled, StyledHeader } from "./styles";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import logoWhite from "../../assets/img/logo-white.svg"
import logoDark from "../../assets/img/logo-dark.svg"

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <StyledHeader>
            <LogoStyled 
                src={theme === "light" ? logoWhite : logoDark} 
                alt="logo exdata"
            />  
            
            <ButtonTheme onClick={() => toggleTheme()}>
                {theme === "light" ? <MdDarkMode size={22} />  : <MdOutlineDarkMode size={22} />}
            </ButtonTheme>
        </StyledHeader>
    )
}