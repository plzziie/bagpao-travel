import React, {Component,PropTypes} from 'react'
import ReactRouter from 'react-router'
import style from '../styles/detail.css'
import styles from '../styles'

function TripDetail (props) {
console.log(props);
  return(
    <div className="container-fluid">
      <div className="row scrollmenu">
        <div className = "container">

         { props.show.map((val, index) => {
                console.log("test",props.show);
            })}


       <div className="col-md-offset-5 buttongap">
         <a className="btn btn-success col-md-3" href="/trips" role="button">Back</a>
       </div>

      </div>
    </div>
  </div>

   )
 }

 TripDetail.PropTypes = {
   show: PropTypes.object.isRequired
 }


export default TripDetail
