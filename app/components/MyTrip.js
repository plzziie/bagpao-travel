import React from 'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'
import {Modal} from 'react-bootstrap'
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

											 { val.liker.map((vals, indexs) => {
												 return (vals == props.username)
													 ? <input key={indexs} type="checkbox" value={val.name} className="like_position" checked/>
													 : <input key={indexs} type="checkbox" value={val.name} className="like_position" onClick={() => props.onUpdateLike(val.name)}/>
											 })} <label className="like"></label>


												 <input type="checkbox" id="fav" className="cb_position" onClick={() => props.onAddFav(val.name)}/> <label className="heart"></label>

												 <label className="col-md-offset-8 text-right" onClick={() => props.open(val.name)}>
			                    <span className="glyphicon glyphicon-trash trash" aria-hidden="true"></span>
											</label>


						      </div>
								</div>
					 })
				 }
			      </div>

						<Modal show = {props.showModal} onHide = {props.close}>
              <Modal.Header closeButton>
                <Modal.Title>Are you sure</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>Do you want to delete this trip ?</div>
              </Modal.Body>
              <Modal.Footer>
                <button onClick = {props.deletetrip}>Delete</button>
								<button onClick = {props.close}>Cancel</button>
              </Modal.Footer>
            </Modal>

    </div>
    )
  }

MyTrip.PropTypes = {
	username: PropTypes.string.isRequired,
	mytrip: PropTypes.object.isRequired,
	onUpdateLike: PropTypes.func.isRequired,
	onAddFav: PropTypes.func.isRequired,
	onRemoveFav: PropTypes.func.isRequired,
	SeeTripsDetails: PropTypes.func.isRequired,
	open: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
	deletetrip: PropTypes.func.isRequired,
	showModal: PropTypes.bool.isRequired
}

export default MyTrip
