import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme";
import { ButtonTheme, StyledHeader } from "./styles";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <StyledHeader>
            <h5>text</h5>
            <ButtonTheme onClick={() => toggleTheme()}>
                {theme === "light" ? <MdDarkMode size={20} />  : <MdOutlineDarkMode size={20} />}
            </ButtonTheme>
        </StyledHeader>
    )
}