import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function EditProfile (props) {
  return(
    <div className="container-fluid">
    	<div className = "jumbotron col-xs-4 col-xs-offset-1 text-center">
        	<div><img className = "img-circle" src = "app/img/pic.jpg" alt = "profile" width = "200" height = "200"/></div>
        	<div><h4>Change</h4></div>
        	<div className = "btn-group" data-toggle = "buttons" style = {styles.gap}>
          		<label className = "btn btn-default active">
            		<input type = "radio" name = "public" id = "public" checked />Public
          		</label>
          		<label className = "btn btn-default">
            		<input type = "radio" name = "private" id = "private" />Private
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
			<div className = "form-group row" style = {styles.space}>
  				<h4 className = "col-sm-3">Username</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" disabled />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Password</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" disabled />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Email</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Display Name</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Birthday</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Current City</h4>
  				<div className = "col-sm-8">
    				<input className = "form-control" type = "text" />
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Interest</h4>
  				<div className = "col-sm-8">
    				<div className = "checkbox-inline">
 						<label><input type = "checkbox" value = "" />Market</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "" />Beach</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "" />Museum</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "" />National Park</label>
					</div>
					<div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "" />Safari</label>
					</div>
          <div className = "checkbox-inline">
  						<label><input type = "checkbox" value = "" />Temple</label>
					</div>
  				</div>
			</div>
			<div className = "form-group row">
  				<h4 className = "col-sm-3">Bio</h4>
  				<div className = "col-sm-8">
    				<textarea className = "form-control" rows = "5" type = "text" />
  				</div>
			</div>
			<div className = "form-group col-xs-4 col-xs-offset-5" style = {styles.gapp}>
              <button
                className = "btn btn-block btn-success"
                type = "submit">
                  Submit
              </button>
            </div>
		</div>
    </div>
    )
}

export default EditProfile
