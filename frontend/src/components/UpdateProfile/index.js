import { useDispatch, useSelector } from "react-redux";
import "./style.css"
import { useState } from "react";
import axios from "axios";
import { setLogout } from "../Redux/reducers/auth";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
	const state = useSelector((state) => {
		return {
			userId: state.auth.userId,
			token: state.auth.token,
			userInfo: state.auth.userInfo,
			image: state.auth.user_image
		};
	});
  	const navigate = useNavigate();
  	const dispath = useDispatch();
  	const [first_name, setFirst_name] = useState(state.userInfo.first_name)
	const [last_name, setLast_name] = useState(state.userInfo.last_name)
	const [phone_no, setPhone_no] = useState(state.userInfo.Phone_Number)
	const [user_image, setUser_image] = useState(state.image)
  	const [isLoading, setIsLoading] = useState(false);
	const logout = () => {
		setIsLoading(true);
		dispath(setLogout())
		navigate('/login')
	};
	const updateFn = () =>{
		axios
		.put('http://localhost:5000/users/updateUser',
		{first_name,last_name,phone_no,user_image},
		{headers: {Authorization: state.token}})
		.then((result)=>{logout()})
		.catch((err)=>{console.log(err);})
	}
return(
    <div className="container-profile">
		<div className="card-profile">
		  <div className="card-header-profile">
			<h1 className="header-title-profile">Personal Information</h1>
		  </div>
		  <div className="card-body-profile">
			<form>
			  <div className="form-group-profile">
				<label htmlFor="firstName" 	className="label-profile">First Name </label>
				<input onChange={(e)=>{setFirst_name(e.target.value)}} className="input-profile" type="text" id="firstName" name="firstName" placeholder={first_name} required/>
			  </div>
			  <div className="form-group-profile">
				<label htmlFor="lastName"className="label-profile">Last Name </label>
				<input onChange={(e)=>{setLast_name(e.target.value)}} className="input-profile" type="text" id="lastName" name="lastName" placeholder={last_name} required/>
			  </div>
			  <div className="form-group-profile">
				<label htmlFor="phone" className="label-profile">Phone </label>
				<input onChange={(e)=>{setPhone_no(e.target.value)}} className="input-profile" type="tel" id="phone" name="phone" placeholder={phone_no} required/>
			  </div>
			  <div className="form-group-profile">
				<label htmlFor="image"className="label-profile">Upload Image</label>
				{/* <input className="input-profile" type="file" id="image" name="image" accept="image/*"/> */}
			  </div>
			  
			</form>
			<button onClick={()=>{updateFn()}}type="submit" className="button-profile">Submit</button>
		  </div>
		</div>
	  </div>
)
}
export default UpdateProfile