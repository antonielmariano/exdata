import {  createContext, ReactNode, useState } from "react";

interface IProps{
    children: ReactNode
}

interface ITheme{
    theme: string
    setTheme: (newValue:string) => void
    toggleTheme: ()=> void
}

const verifyLocalStorage = ()=>{
    const themeLocalStorage = localStorage.getItem("@themeED")
    if(themeLocalStorage){
        return themeLocalStorage
    }
    return "light"
}

export const ThemeContext = createContext<ITheme>({
    theme: verifyLocalStorage(),
    setTheme: () => undefined,
    toggleTheme: ()=> undefined
})

export const ThemeProvider = ({children}:IProps)=>{
    const [theme, setTheme] = useState(verifyLocalStorage())

    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
        localStorage.setItem(
            "@themeED", 
            theme === "light" ? "dark" : "light"
            )
    }

    return(
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}