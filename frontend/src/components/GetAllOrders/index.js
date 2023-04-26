import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../Redux/reducers/order";
import "axios";

import "./style.css";
import axios from "axios";

const GetAllOrders = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    console.log(state);
    return {
      token: state.auth.token,
    };
  });

  const [receiver_user_id, setReceiver_user_id] = useState(3);
  const fm = () => {
    axios
      .get(
        `http://localhost:5000/orders/`,
        { receiver_user_id },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((result) => {
        console.log(result);
        dispatch(setOrder(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="all-orders-div">
      <p>i am here</p>
      <button onClick={fm}>onClick</button>
    </div>
  );
};

export default GetAllOrders;
