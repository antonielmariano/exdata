import { ReactNode } from "react"
import { ThemeProvider } from "./theme"


interface IProps{
    children: ReactNode
}


export default function Providers({children}: IProps){
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}