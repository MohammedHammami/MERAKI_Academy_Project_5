import "./style.css"
const UpdateProfile = () => {
return(
    <div className="container-profile">
		<div className="card-profile">
		  <div className="card-header-profile">
			<h1 className="header-title-profile">Update Profil Informaition</h1>
		  </div>
		  <div className="card-body-profile">
			<form>
			  <div className="form-group-profile">
				<label for="firstName" 	className="label-profile">First Name</label>
				<input className="input-profile" type="text" id="firstName" name="firstName" placeholder="Enter your first name" required/>
			  </div>
			  <div className="form-group-profile">
				<label for="lastName"className="label-profile">Last Name</label>
				<input className="input-profile" type="text" id="lastName" name="lastName" placeholder="Enter your last name" required/>
			  </div>
			  <div className="form-group-profile">
				<label for="phone" className="label-profile">Phone</label>
				<input className="input-profile" type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
			  </div>
			  <div className="form-group-profile">
				<label for="image"className="label-profile">Upload Image</label>
				<input className="input-profile" type="file" id="image" name="image" accept="image/*"/>
			  </div>
			  <button type="submit" className="button-profile">Submit</button>
			</form>
		  </div>
		</div>
	  </div>
)
}
export default UpdateProfile