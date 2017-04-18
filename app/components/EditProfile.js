import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function EditProfile (props) {
  console.log(props);
  return(
    <div className="container-fluid">
      <form onSubmit = {props.onSubmitEdit}>
    	<div className = "jumbotron col-xs-4 col-xs-offset-1 text-center">
        	<div><img className = "img-circle" src = "app/img/pic.jpg" alt = "profile" width = "200" height = "200"/></div>
        	<div><h4>Change</h4></div>
        	<div className = "btn-group" data-toggle = "buttons" style = {styles.gap}>
          		<label className = "btn btn-default active">
            		<input type = "radio" name = "public" id = "public" checked onChange = {props.onUpdateStatus} />Public
          		</label>
          		<label className = "btn btn-default">
            		<input type = "radio" name = "private" id = "private" onChange = {props.onUpdateStatus} />Private
          		</label>
        	</div>
      	</div>
      	<div className = "jumbotron col-xs-6 text-center" style = {styles.transparentBg}>
      		<nav className = "navbar navbar-default" style = {styles.transparentBg}>
        		<div className = "row">
          			<div className = "col-xs-offset-3">
            			<ul className = "nav navbar-nav">
              				<li><a href = "/mytrip"><h4>My Trips</h4></a></li>
              				<li><a href = "/draft"><h4>Draft</h4></a></li>
              				<li><a href = "/favorite"><h4>Favorite</h4></a></li>
            			</ul>
          			</div>
        		</div>
    		</nav>
        </div>
			<div className = "form-group row" style = {styles.space}>
  				<h4 className = "col-sm-3">Username</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" disabled onChange = {props.onUpdateName} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Password</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "password" onChange = {props.onUpdatePassword} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Email</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "email" onChange = {props.onUpdateEmail} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Display Name</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" onChange = {props.onUpdateDisplay} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Birthday</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "date" onChange = {props.onUpdateBirthday} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Current City</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" onChange = {props.onUpdateCity} />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Interest</h4>
  				<div className = "col-sm-8">
    				<div className = "checkbox-inline">
 						<label><input type = "checkbox" value = "market" onChange = {props.onUpdateInterest} />Market</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "beach" onChange = {props.onUpdateInterest} />Beach</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "museum"  onChange = {props.onUpdateInterest} />Museum</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "nationalpark"  onChange = {props.onUpdateInterest} />National Park</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "safari"  onChange = {props.onUpdateInterest} />Safari</label>
					</div>
          <div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "temple"  onChange = {props.onUpdateInterest} />Temple</label>
					</div>
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Bio</h4>
  				<div className = "col-sm-8">
    				<textarea className = "form-control" rows = "5" type = "text"  onChange = {props.onUpdateBio} />
  				</div>
			</div>
			<div className = "form-group col-xs-4 col-xs-offset-5" style = {styles.gapp}>
              <button
                className = "btn btn-block btn-success"
                type = "submit">
                  Submit
              </button>
            </div>
            </form>
		</div>
    )
}

EditProfile.PropTypes = {
onUpdateBio: PropTypes.func.isRequired,
onUpdateName: PropTypes.func.isRequired,
onUpdatePassword: PropTypes.func.isRequired,
onUpdateEmail: PropTypes.func.isRequired,
onUpdateCity: PropTypes.func.isRequired,
onUpdateBirthday: PropTypes.func.isRequired,
onUpdateInterest: PropTypes.func.isRequired,
onUpdateStatus: PropTypes.func.isRequired,
onUpdateDisplay: PropTypes.func.isRequired,
member: PropTypes.bool.isRequired,
username: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
password: PropTypes.string.isRequired,
email: PropTypes.string.isRequired,
display: PropTypes.string.isRequired,
birthday: PropTypes.string.isRequired,
currentcity: PropTypes.string.isRequired,
interest: PropTypes.string.isRequired,
picture: PropTypes.string.isRequired,
bio: PropTypes.string.isRequired,
status: PropTypes.string.isRequired
}

export default EditProfile
