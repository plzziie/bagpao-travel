import React, {Component,PropTypes} from 'react'
import ReactRouter from 'react-router'
import style from '../styles/detail.css'
import styles from '../styles'
import styl from '../styles/stepfour.css'
import styless from '../styles/step.css'
import stylesss from '../styles/trips.css'
import stylesssss from '../styles/places.css'

function TripDetail (props) {
console.log(props);
var tmp = [];
  for (var i = 0; i < props.daytrip; i++) {
    tmp.push(i);
  }
  return(
    <div className="container-fluid">
      <div className="container">
      <div className="stepthree_day">
        <div className="row scrollmenu">
        {tmp.map((val, index) => {
          return <div key = {index} className="planbox">
            <div className="day">Day {val+1}
                    {props.show.map((vals, indexs) => {
                        return (vals.place[val].days == index+1) ? <div key = {indexs} className="dragbox"><div className="col-md-3">
                        <img className = "img-circle" src = {vals.place[val].picture} alt = {vals.place[val].name[0]} width="50" height="50"/></div>
                        <div className="col-md-8"><h5>{vals.place[val].name[0]}</h5> <h6>{vals.place[val].city[0]}</h6></div>
                        </div>
                      : null })}
            </div></div> })}
      </div>
    </div>
       </div>
         <div className="col-md-offset-5 buttongap">
           <a className="btn btn-success col-md-3" href="/places" role="button">Back</a>
         </div>
    </div>
    )
  }

  TripDetail.PropTypes = {
  show: PropTypes.object.isRequired,
  daytrip: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
  }

export default TripDetail
