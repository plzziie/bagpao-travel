import React from 'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from '../styles'

function MyTrip (props) {
	console.log(props);
	return (
		<div className="container-fluid">
		{ props.member.map((val, index) => {
		 return <div className = "jumbotron col-xs-4 col-xs-offset-1 text-center" key= {index}>
			 <div><img className = "img-circle" src = {val.picture} alt = "profile" width = "200" height = "200"/></div>
			 <div><Link to = "/editprofile">Edit Profile</Link></div>
			 <div className = "btn-group" data-toggle = "buttons" style = {styles.gap}>
				 <label className = "btn btn-default active">
					 <input type = "radio" name = "public" id = "public" checked />Public
				 </label>
				 <label className = "btn btn-default ">
					 <input type = "radio" name = "private" id = "private" />Private
				 </label>
			 </div>
			 <div style = {styles.gapp}>
				 <h4><u>Interest</u></h4>
				 <div className = 'well'>{val.interest}</div>
			 </div>
			 <div style = {styles.gapp}>
				 <h4><u>Bio</u></h4>
				 <div className = 'well well-lg'>{val.bio}</div>
			 </div>
		 </div>
	 })
 }

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

      <div className = "row" style = {styles.space}>
			{ props.member.map((val, index) => {
			 return  <div className = "col-xs-6" style = {styles.center} key = {index}>
			         <img className = "img" src = {val.picture} width = "200" height = "150"/>
			         <h4 style = {styles.gapp}>{val.username}</h4>
			         <h5>{val.username}</h5>
			       </div>
		 })
	 }

      </div>
      </div>
    </div>
    )
  }

	MyTrip.PropTypes = {
	member: PropTypes.bool.isRequired,
	username: PropTypes.string.isRequired
}

export default MyTrip
