import React from 'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from '../styles'
import style from '../styles/mytrip.css'

function Favorite (props) {
	console.log(props);
	return (
		<div className="container-fluid">


			<div className = "row">
						{ props.favtrip.map((val, index) => {
						 return  <div key = {index}><div className = "col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-0 photo" >
						         <a href="trips-details" ><img className = "img" src = {val.picture}  width="376" height="251" /></a>
										 <div className="bottomleft1">{val.name.toUpperCase()}</div>
										 <div className="box"></div>
										 <div className="bottomleft2">by {val.creator.toUpperCase()}</div>
									 </div>
						      </div>
					 })
				 }
			      </div>





    </div>
    )
  }

	Favorite.PropTypes = {
	username: PropTypes.string.isRequired,
	favtrip: PropTypes.object.isRequired
}

export default Favorite
