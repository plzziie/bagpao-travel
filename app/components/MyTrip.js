import React from 'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from '../styles'
import style from '../styles/mytrip.css'

function MyTrip (props) {
	console.log(props);
	return (

		<div className="container-fluid">
			<div className = "row">
						{ props.mytrip.map((val, index) => {
						 return  <div key = {index}><div className = "col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-0 photo " >
											 <img className = "img favgap" src = {val.picture} alt = {val.name} width="376" height="251" onClick={() => props.SeeTripsDetails(val.name)}/>
											 <div className="bottomlefttrip1">{val.name.toUpperCase()}</div>
											 <div className="boxtrip"></div>
											 <div className="bottomlefttrip2">by {val.creator.toUpperCase()}</div>
											 <input type="checkbox" value={val.name} className="checklike" onClick={() => props.onUpdateLike(val.name)}/><label className="like">Like</label>
											 <input type="checkbox" id="fav"  className="cb_position" onClick={() => props.onAddFav(val.name)}/>&nbsp;&nbsp;<label className="heart"></label>
											 <label className="col-md-offset-8 text-right" onClick={() => props.deletetrip(val.name)}>
			                    <span className="glyphicon glyphicon-trash trash" aria-hidden="true"></span>
											</label>


						      </div>
								</div>
					 })
				 }
			      </div>
    </div>
    )
  }

MyTrip.PropTypes = {
	username: PropTypes.string.isRequired,
	mytrip: PropTypes.object.isRequired,
	onUpdateLike: PropTypes.func.isRequired,
	onAddFav: PropTypes.func.isRequired,
	SeeTripsDetails: PropTypes.func.isRequired,
	deletetrip: PropTypes.func.isRequired
}

export default MyTrip
