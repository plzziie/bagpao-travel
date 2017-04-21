import React from 'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from '../styles'
import style from '../styles/mytrip.css'
import MyTripContainer from '../containers/MyTripContainer'
import FavoriteContainer from '../containers/FavoriteContainer'



function Profile (props) {
	console.log(props);
	return (
		<div className="container-fluid">

      { props.member.map((val, index) => {
  		 return <div className = "jumbotron col-xs-3 col-xs-offset-1 text-center" key= {index}>
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


      <div className = "jumbotron col-md-7 col-sm-7 col-xs-7 text-center" style = {styles.transparentBg}>
        <nav className = "navbar navbar-default" style = {styles.transparentBg}>
          <div className = "row">
            <div className = "col-md-offset-3 col-xs-offset-1">
              <ul className = "nav nav-pills step-bottom">

              	<li className = "active"><a data-toggle = "tab" href = "#details"><h3>My Trip</h3></a></li>
              	<li><a data-toggle = "tab" href = "#reviews"><h3>Favorite</h3></a></li>
            	</ul>
            </div>
          </div>
        </nav>

            	<div className = "tab-content">
              		<div id = "details" className = "tab-pane fade in active">
              	<MyTripContainer/>s
              		</div>
              		<div id = "reviews" className = "tab-pane fade">
								<FavoriteContainer/>
              		</div>
            	</div>
            </div>
          </div>
    )
  }

  Profile.PropTypes = {
  	member: PropTypes.bool.isRequired,
  	username: PropTypes.string.isRequired,
  }

  export default Profile
