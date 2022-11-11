import {  createContext, ReactNode, useState } from "react";

interface IProps{
    children: ReactNode
}

interface ITheme{
    theme: string
    setTheme: (newValue:string) => void
    toggleTheme: ()=> void
}

export const ThemeContext = createContext<ITheme>({
    theme: "light",
    setTheme: () => undefined,
    toggleTheme: ()=> undefined
})

export const ThemeProvider = ({children}:IProps)=>{
    const [theme, setTheme] = useState("light")

    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}