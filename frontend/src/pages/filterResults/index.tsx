import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss"
import ptBR from 'date-fns/locale/pt-BR';
import Graph from "../../components/header/graph";
import { MainStyled, SectionDataStyled, SectionGraphStyled } from "./styles";
import DatePicker, { registerLocale } from "react-datepicker"
import { ThemeContext } from "../../contexts/theme";
import { useContext, useState } from "react";

export default function FilterResults() {

    const [startDate, setStartDate] = useState<Date>(new Date());
    registerLocale("ptBR", ptBR)

    const setDate =(date:Date)=>{
        setStartDate(date)

    }

    return (
        <MainStyled>

            <SectionGraphStyled>
                <h5>Ultimos três meses</h5>
                <Graph />
            </SectionGraphStyled>

            <SectionDataStyled>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => {
                        setDate(date)
                    }}
                    locale="ptBR"
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                    showPopperArrow={false}
                    dropdownMode="select"
                    placeholderText="Mês"
                    maxDate={new Date()}
                />


                <button>Pesquisar</button>
            </SectionDataStyled>

        </MainStyled>
    )
}