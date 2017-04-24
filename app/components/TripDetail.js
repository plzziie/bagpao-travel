import React, {Component,PropTypes} from 'react'
import ReactRouter, {browserHistory} from 'react-router'
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
    <div className="container-fluid step-bottom">
      <div className="container">

        {props.show.map((val, index) => {
          return <div key = {index}><div className = "text-center"><div className = "detail_header">{val.name.toUpperCase()}</div>
                 <img className = "img " src={val.picture} alt = {val.name}  width = "376" height = "251"/></div>
                 <div className = "contentdetail col-md-offset-3 col-md-6">
                   <form>
                     <fieldset>
                       <p><b>Creator :</b> {val.creator}</p>
                       <p><b>Date :</b> {val.datesubmit}</p>
                       <p><b>From :</b> {val.origin}  <b>To :</b> {val.destination}</p>
                       <p><b>Like :</b> {val.like}</p>
                     </fieldset>
                   </form>
               </div></div>
         })}

        <div className="col-md-offset-2 stepthree_day" style = {styles.gapp}>
        <div className="row scrollmenu">
         {tmp.map((val, index) => {
            return <div key = {index} className="day">
              <div className="inday">Day {val+1}</div>
                <div className="planbox">
                     {props.show.map((vals, indexs) => {
                        return <div key= {indexs}>
                        {vals.place.map((j, indexj) => {
                           return (j.days == index+1) ?
                              <div key = {indexj} className="dragbox"><div className="col-md-3">
                              <img className = "img-circle" src = {j.picture} alt = {j.name[0]} width="50" height="50"/></div>
                              <div className="col-md-8"><h5>{j.name[0]}</h5> <h6>{j.city[0]}</h6></div>
                              </div>
                          : null
                        })}
                        </div>
                     })}
             </div>
           </div>
         })}

      </div>
      </div>
       </div>
         <div className="col-md-offset-5 buttongap" style = {styles.gapp}>
           <button className="btn btn-success col-md-3" onClick = {browserHistory.goBack}>Back</button>
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
