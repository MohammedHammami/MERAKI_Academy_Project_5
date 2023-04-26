import "./style.css";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const DashboardProvider = () => {
  const [orders, setOrders] = useState([]);
  const [completed, setCompleted] = useState(0)
  const [pending, setPending] = useState(0)
  const [canceled, setCanceled] = useState(0)
  const [coulmName,setCoulmName] = useState([])
  const [coulmValue,setCoulmValue] = useState([])
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      userId: state.auth.userId,
      token: state.auth.token,
      userInfo: state.auth.userInfo,
    };
  });
  const fillterRate = (array) =>{
    let rate1 = 0;
    let rate2 = 0;
    let rate3 = 0;
    let rate4 = 0;
    let rate5 = 0;
    for (let i = 0; i < array.length; i++) {
      if(array[i].rate === 5){rate5++}
      if(array[i].rate === 4){rate4++}
      if(array[i].rate === 3){rate3++}
      if(array[i].rate === 2){rate2++}
      if(array[i].rate === 1){rate1++}
    }
    setCoulmName(["rate5","rate4","rate3","rate2","rate1"])
    setCoulmValue([rate5,rate4,rate3,rate2,rate1])
  }
  const getRate = () =>{
    axios
    .get(`http://localhost:5000/review/`,{headers: {Authorization: state.token}})
    .then((result)=>{
      console.log(result.data.Reviews);
      fillterRate(result.data.Reviews)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const ChartComponent = (props) => {
    const chartRef = useRef(null);
    useEffect(() => {
      const chartCanvas = chartRef.current.getContext("2d");
      const myChart = new Chart(chartCanvas, {
        type: "bar", //bar,
        data: {
          labels: coulmName,
          datasets: [
            {
              label: "no: rated",
              data: coulmValue,
              backgroundColor: "rgb(110, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        },
        options: { scales: { y: { beginAtZero: true } } },
      });

      return () => {
        myChart.destroy();
      };
    }, [props]);

    return <canvas ref={chartRef} />;
  };

  const descOrder = (array)=>{
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 0; i < array.length; i++) {
      if(array[i].state_id==1){a++;setPending(a)}
      if(array[i].state_id==2){b++;setCompleted(b)}
      if(array[i].state_id==3){c++;setCanceled(c)}
    }
  } 
  const getAllOrder = () =>{
    axios
    .get(`http://localhost:5000/orders/${state.userId}`, {headers: {Authorization: state.token}})
    .then((result)=>{
      setOrders(result.data.order)
      descOrder(result.data.order)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
  getAllOrder()
  getRate()
  },[])
  const to_notification = ()=>{
    navigate('/getAllNotification')
  }


  // const getAllOrder = () => {
  //   axios
  //     .get(`http://localhost:5000/orders/${state.userId}`, {
  //       headers: { Authorization: state.token },
  //     })
  //     .then((result) => {
  //       setOrders(result.data.order);
  //       console.log(orders);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   getAllOrder();
  // }, []);
  // const to_notification = () => {
  //   navigate("/getAllNotification");
  // };
const toCreatePost = ()=>{
  navigate("/CreatePost")
}
const toOrder = ()=>{
  navigate("/orders")
}
  return (
    <div className="container_dashboard_provider">
      
      <div className="menu">
        <p>
          <button className="go_to">menu</button>
        </p>
        <p>
          <button className="go_to">profile settings</button>
        </p>
        <p>
          <button className="go_to">posts</button>
        </p>
        <p>
          <button className="go_to" onClick={toOrder}>order</button>
        </p>
        <p>
          <button className="go_to" onClick={to_notification}>
            notification
          </button>
        </p>
        <p>
          <button className="go_to" onClick={toCreatePost}>createPost</button>
        </p>
      </div>
      <div className="body_container">
        <div className="order_info__cotainer_div">
          <div className="card_order_info">
            <h3>no: of order Accept</h3>
            <p>All order : {orders.length}</p>
            <p>Completed : {completed}</p>
          </div>
          <div className="card_order_info">
            <h3>no: of order Pending</h3>
            <p>All order : {orders.length}</p>
            <p>Pending : {pending}</p>
          </div>
          <div className="card_order_info">
            <h3>no: of order Canceled</h3>
            <p>All order : {orders.length}</p>
            <p>Canceled : {canceled}</p>
          </div>
        </div>
        <div className="ChartComponent"><ChartComponent/></div>
      </div>
       
      
    </div>
  );
};
export default DashboardProvider