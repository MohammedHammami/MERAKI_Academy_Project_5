import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./style.css"
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
        <div className="container_dashboard_provider">
          <div className="menu">
            <p>menu</p>
            <p>profile</p>
            <p>posts</p>
            <p>order</p>
            <p>notification</p>
            <p>createPost</p>
          </div>
          <div className="body_container">
            <div className="order_info__cotainer_div">
              <div className="card_order_info">
                <h3>no: of order Completed</h3>
                <p>sssssssss</p>
                <p>sssssssss</p>
              </div>
              <div className="card_order_info">
                <h3>no: of order Pending</h3>
                <p>sssssssss</p>
              </div>
              <div className="card_order_info">
                <h3>no: of order Canceled</h3>
                <p>sssssssss</p>
              </div>

            </div>
          </div>
            {/* <ChartComponent/> */} 
        </div>
    )
}
export default DashboardProvider
