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
						         <img className = "img favgap" src = {val.picture}  width="376" height="251" onClick={() => props.SeeTripsDetails(val.name)}/>
										 <div className="bottomlefttrip1">{val.name.toUpperCase()}</div>
										 <div className="boxtrip"></div>
										 <div className="bottomlefttrip2">by {val.creator.toUpperCase()}</div>
										 <input type="checkbox" id="fav"  className="fav_position" onClick={() => props.onRemoveFav(val.name)}/>&nbsp;&nbsp;<label className="heartfav"></label>

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
	favtrip: PropTypes.object.isRequired,
	onRemoveFav: PropTypes.func.isRequired,
	SeeTripsDetails: PropTypes.func.isRequired
}

export default Favorite
