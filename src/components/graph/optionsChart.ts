import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme"


export const Options = () => {
    const { theme } = useContext(ThemeContext)

    const optionsChart = {
        labels: ["Quantidade", "Valor"],
        colors: ["#1F45CD", "#1CDA51"],
        plotOptions: {
            radialBar: {
                track: {
                    background: theme === "light " ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.09)"
                },
                hollow: {
                    background: "#1F45CD",
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    },
                },
                dataLabels: {
                    name: {
                        fontSize: '22px',
                        color: theme === "light " ? "black" : "white",
                        formatter: function (w: string) {
                            return w
                        }
                    },
                    value: {
                        fontSize: '16px',
                        color: theme === "light " ? "black" : "white",
                        formatter: function (w: any) {
                            let toInt = parseInt(w)
                            return toInt.toLocaleString("pt-br")
                        }
                    },
                    total: {
                        show: true,
                        label: 'Passe para ver',
                        color: theme === "light " ? "black" : "white",
                        formatter: function (w: string) {
                            return ""
                        }
                    }
                }
            }
        },
    }
    return optionsChart
}


