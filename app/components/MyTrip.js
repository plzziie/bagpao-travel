import React from 'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from '../styles'
import style from '../styles/mytrip.css'

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

      <div className = "jumbotron col-md-6 col-sm-6 col-xs-6 text-center" style = {styles.transparentBg}>
      <nav className = "navbar navbar-default" style = {styles.transparentBg}>
        <div className = "row">
          <div className = "col-md-offset-3 col-xs-offset-1">
            <ul className = "nav navbar-nav">
              <li><a href = "/mytrip"><h4>My Trips</h4></a></li>
              <li><a href = "/draft"><h4>Draft</h4></a></li>
              <li><a href = "/favorite"><h4>Favorite</h4></a></li>
            </ul>
          </div>
        </div>
      </nav>



			<div className = "row">
						{ props.mytrip.map((val, index) => {
						 return  <div key = {index}><div className = "col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-0 myphoto" >
						         <a href="trips-details" ><img className = "img" src = {val.picture}  width="376" height="251"/></a>
										 <div className="mybottomleft1">{val.name}</div>
										 <div className="mybox"></div>
										 <div className="mybottomleft2">by {val.creator}</div>
									 </div>
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
	username: PropTypes.string.isRequired,
	mytrip: PropTypes.object.isRequired
}

export default MyTrip
