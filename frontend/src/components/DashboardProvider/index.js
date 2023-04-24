import "./style.css"
import {useSelector } from "react-redux"
import React, { useEffect, useRef, useState} from "react";
import Chart from "chart.js/auto";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const DashboardProvider = () =>{
  const [orders, setOrders] = useState([])
    const navigate = useNavigate();
    const state = useSelector((state)=>{
    return{
      userId:state.auth.userId,
      token:state.auth.token,
      userInfo:state.auth.userInfo
    }
})
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
  const getAllOrder = () =>{
    axios
    .get(`http://localhost:5000/orders/${state.userId}`, {headers: {Authorization: state.token}})
    .then((result)=>{
      setOrders(result.data.order)
      console.log(orders);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
  getAllOrder()
  },[])
  const to_notivication = ()=>{
    navigate('/getAllNotivication')
  }
  return (
    <div className="container_dashboard_provider">
      <div className="menu">
        <p><button className="go_to">menu</button></p>
        <p><button className="go_to">profile</button></p>
        <p><button className="go_to">posts</button></p>
        <p><button className="go_to">order</button></p>
        <p><button className="go_to" onClick={to_notivication}>notification</button></p>
        <p><button className="go_to">createPost</button></p>
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
        {/* <ChartComponent/>  */}
    </div>
  )
}
export default DashboardProvider
