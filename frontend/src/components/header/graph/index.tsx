import { useState } from "react"
import Chart from "react-apexcharts"
import { data } from "./mockData";

export default function Graph(){

    const [month, setMonth] = useState(["1", "2", "3",])

    const lineChartOptionsTotalSpent:any = {
        options:{
        chart: {
            toolbar: {
            show: false,
            },
            dropShadow: {
            enabled: true,
            top: 13,
            left: 0,
            blur: 10,
            opacity: 0.1,
            },
        },
        colors: ["#fa7249", "#1CDA51"],
        markers: {
            size: 0,
            colors: "white",
            strokeColors: "#1F45CD",
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            showNullDataPoints: true,
        },
        tooltip: {
            theme: "dark",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            type: "line",
        },
        xaxis: {
            categories: month,
            labels: {
            style: {
                colors: "#A3AED0",
                fontSize: "12px",
                fontWeight: "500",
            },
            },
            axisBorder: {
            show: false,
            },
            axisTicks: {
            show: false,
            },
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
            column: {
            color: ["#1F45CD", "#39B8FF"],
            opacity: 0.5,
            },
        },
        color: ["#1F45CD", "#39B8FF"],
        },
        series: data
        
    };

    return(
        <>
            <button>Primeiro trimeste</button>
            <button>Segundo trimestre</button>
            <button>Terceiro trimestre</button>
            <button>Quarto trimestre</button>
            <Chart
                options={lineChartOptionsTotalSpent.options}
                series={lineChartOptionsTotalSpent.series}  
                type='area'
                width='100%'
                height='100%'
            />
        </>
    )
}