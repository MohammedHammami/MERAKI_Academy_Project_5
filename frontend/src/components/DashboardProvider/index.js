import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DashboardProvider = () =>{
    const ChartComponent = (props) => {
        const chartRef = useRef(null);
      
        useEffect(() => {
          const chartCanvas = chartRef.current.getContext("2d");
          const myChart = new Chart(chartCanvas, {
            type: "bar",//bar,
            data: {
                labels: [],
                datasets: [
                {
                    label: "My First Dataset",
                    data: [],
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgba(255, 99, 132, 0.2)"
                }
                ]
            },
            options: {scales: {y:{beginAtZero: true}}}
          });
      
          return () => {
            myChart.destroy();
          };
        }, [props]);
      
        return <canvas ref={chartRef} />;
      };
    return (
        <div className="container">
            <ChartComponent/>
        </div>
    )
}
export default DashboardProvider
