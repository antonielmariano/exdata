import { useContext, useEffect, useState } from "react"
import Chart from "react-apexcharts"
import { ThemeContext } from "../../contexts/theme";
import { internalAPI } from "../../services/internalAPI";
import { Options } from "./optionsChart";
import { ButtonStyled, DivStyled, SectionGraphStyled } from "./styles";

export default function Graph() {
    const [data, setData] = useState([])
    const [selectedButton, setSelectedButton] = useState("Primeiro")


    useEffect(() => {
        internalAPI.get("quarterly/1/")
            .then((response) => {
                const arr: any = []
                arr.push(response.data.Quantidade, response.data.Valor)
                setData(arr)
            });
    }, [])

    const filterQuarter = (option: string, quarter: number) => {
        setSelectedButton(option)
        setData([])
        internalAPI.get(`quarterly/${quarter}/`)
            .then((response) => {
                const arr: any = []
                arr.push(response.data.Quantidade, response.data.Valor)
                setData(arr)
            });
    }



    return (
        <SectionGraphStyled>
            <h3>Filtre por semestre</h3>
            <DivStyled>
                {["Primeiro", "Segundo", "Terceiro", "Quarto"].map((option, index) =>
                    <ButtonStyled
                        key={`${option} ${index}`}
                        onClick={() => filterQuarter(option, index + 1)}
                        selected={selectedButton === option ? true : false}
                    >{option}
                    </ButtonStyled>
                )}

            </DivStyled>
            {data.length < 1 && <h4>Buscando dados...</h4>}
            <Chart
                options={Options()}
                series={data}
                type='radialBar'
                width='300px'
                height='300px'
            />
        </SectionGraphStyled>
    )
}