import React from 'react'
import {PropTypes} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'

function EditProfile (props) {
  console.log(props);
  return(
    <div className="container-fluid">

    {props.member.map((val, index) => {
         return <div key={index}>
           <div className="container step-bottom">
    	          <div className = "jumbotron col-xs-4 col-xs-offset-4 text-center">
        	      <div><img className = "img-circle" id ="output" src = {val.picture} alt = "profile" width = "200" height = "200"/></div>
                <input type="file" className = "col-xs-offset-2" style = {styles.gapp} onChange = {(event) => props.onUpdatePicture(event)} />
      	        </div>
              </div>
      <form onSubmit = {props.onSubmitEdit} className = "col-md-offset-2">
			<div className = "form-group row">
  				<h4 className = "col-sm-2">Username</h4>
  				<div className = "col-sm-7">
    				<input className = "form-control" type = "text" value = {val.username} disabled/>
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-2">Password</h4>
  				<div className = "col-sm-7">
    			<input className = "form-control" type = "password" value = {val.password}  disabled />
        </div>
        <a className="col-sm-2 cursor" data-toggle="collapse" data-target="#demo">Change Password</a>
			</div>

        <form id="demo" className="collapse" data-toggle = "validator">
          {/*<div className = "col-sm-offset-2 form-group row">
      				<h4 className = "col-sm-2">Old-Password</h4>
      				<div className = "col-sm-6">
        			<input className = "form-control" type = "password"  placeholder = 'old password'/>
            </div>
    			</div> */}
          <div className = "col-sm-offset-2 form-group row">
      				<h5 className = "col-sm-2 text-right"> New-Password:</h5>
      				<div className = "col-sm-6">
        			<input className = "form-control" type = "password" placeholder = 'new password' type = 'password' onChange = {props.onUpdatePassword}
              id = 'pass' data-error = "Please enter your password" required />  <div className = "help-block with-errors"></div>
            </div>
    			</div>
          <div className = "col-sm-offset-2 form-group row">
      				<h5 className = "col-sm-2 text-right">Re-Password:</h5>
      				<div className = "col-sm-6">
        			<input className = "form-control" type = "password" placeholder = 're-password'
              type = 'password' data-match = "#pass" data-match-error = "Your password is not match"
              data-error = "Please enter your password again" required />  <div className = "help-block with-errors"></div>
            </div>
    			</div>

        </form>

			<div className = "form-group row">
  				<h4 className = "col-sm-2">Email</h4>
  				<div className = "col-sm-7">
    				<input className = "form-control" type = "email" defaultValue = {val.email} onChange = {props.onUpdateEmail} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-2">Birthday</h4>
  				<div className = "col-sm-7">
    				<input className = "form-control" type = "date" defaultValue = {val.birthday} onChange = {props.onUpdateBirthday} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-2">Current City</h4>
  				<div className = "col-sm-7">
    				<input className = "form-control" type = "text" defaultValue = {val.currentcity} onChange = {props.onUpdateCity} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-2">Interest</h4>
  				<div className = "col-sm-7" onChange = {props.onUpdateInterest}>
    				<div className = "checkbox-inline" >
 						<label><input type = "checkbox" value = "amusementpark" />Amusement Park</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "beach" />Beach</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "departmentstore" />Department Store</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "market" />Market</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "museum" />Museum</label>
					</div>
          <div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "nationalpark" />National Park</label>
					</div>
          <div className = "checkbox-inline">
              <label><input type = "checkbox" value = "publicpark" />Public Park</label>
          </div>
          <div className = "checkbox-inline">
              <label><input type = "checkbox" value = "temple" />Temple</label>
          </div>
          <div className = "checkbox-inline">
              <label><input type = "checkbox" value = "zoo" />Zoo</label>
          </div>
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-2">Bio</h4>
  				<div className = "col-sm-7">
    				<textarea className = "form-control" rows = "5" type = "text" defaultValue = {val.bio} onChange = {props.onUpdateBio} />
  				</div>
			</div>
			<div className = "form-group col-md-2 col-md-offset-4" style = {styles.gapp}>
              <button className = "btn btn-block btn-success" type = "submit">Submit
              </button>
            </div>
            </form>
          </div>
          })}
		</div>
    )
}

EditProfile.PropTypes = {
onUpdateBio: PropTypes.func.isRequired,
onUpdatePassword: PropTypes.func.isRequired,
onUpdatePicture: PropTypes.func.isRequired,
onUpdateEmail: PropTypes.func.isRequired,
onUpdateCity: PropTypes.func.isRequired,
onUpdateBirthday: PropTypes.func.isRequired,
onUpdateInterest: PropTypes.func.isRequired,
onUpdateDisplay: PropTypes.func.isRequired,
member: PropTypes.object.isRequired,
password: PropTypes.string.isRequired,
email: PropTypes.string.isRequired,
birthday: PropTypes.string.isRequired,
currentcity: PropTypes.string.isRequired,
interest: PropTypes.string.isRequired,
bio: PropTypes.string.isRequired,
picture: PropTypes.string.isRequired
}

export default EditProfile
