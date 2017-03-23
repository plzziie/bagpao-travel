import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

function StepTwo (props) {
  console.log(props);
    return(
      <div className = "container-fluid">
        <ul className = "stepone nav nav-pills nav-justified">
          <li><a href = "/stepone">Step 1</a></li>
          <li className="active"><a href = "/steptwo">Step 2</a></li>
          <li><a href = "/stepthree">Step 3</a></li>
          <li><a href = "stepfour">Step 4</a></li>
        </ul>

      <div className = "col-xs-6 col-xs-offset-3" style = {styles.space}>
        <form className = "form-horizontal" style = {styles.space} onSubmit = {props.onSubmitTrip}>

            <div className = "form-group">
            <h2>Departure</h2>
              <div className = "col-xs-10">
              <p className = "form-control-static">{props.origin}</p>
              <select onChange = {props.onUpdateVehiclesD}>
                  <option value = "null">Transportation</option>
                  <option value = "bus">Bus</option>
                  <option value = "train">Train</option>
                  <option value = "plane">Plane</option>
               </select>
               <select onChange = {props.onUpdateDepart}> {props.transportation.map((val, index) => {
                    return (val.type == props.vehiclesD)
                    ? <option value = {val.trainnumber} key = {index}>From {val.stationstart} ({val.depart}) To {val.stationend} ({val.arrive})</option>
                    : null
                  })}
                  </select>
              <p className = "form-control-static">{props.destination}</p>
              </div>
            </div>

            <div className = "form-group">
            <h2>Return</h2>
              <div className = "col-xs-10">
              <p className = "form-control-static">{props.destination}</p>
              <select onChange = {props.onUpdateVehiclesR}>
                  <option value = "null">Transportation</option>
                  <option value = "bus">Bus</option>
                  <option value = "train">Train</option>
                  <option value = "plane">Plane</option>
               </select>
               <select onChange = {props.onUpdateReturn}> {props.transportation.map((val, index) => {
                    return (val.type == props.vehiclesR)
                    ? <option value = {val.trainnumber} key = {index}>From {val.stationend} ({val.arrive}) To {val.stationstart} ({val.depart})</option>
                    : null
                  })}
                  </select>
              <p className = "form-control-static">{props.origin}</p>
              </div>
            </div>

            <div className = "col-xs-3 col-xs-offset-3" style = {styles.space}>
              <button type = "submit" className = "button form-control">
               Next
               </button>
            </div>
          </form>
        </div>
        </div>
    )
}

StepTwo.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateVehicles: PropTypes.func.isRequired,
  onUpdateDepart: PropTypes.func.isRequired,
  onUpdateReturn: PropTypes.func.isRequired,
  onUpdateVehiclesDepart: PropTypes.func.isRequired,
  onUpdateVehiclesReturn: PropTypes.func.isRequired,
  depart: PropTypes.string.isRequired,
  return: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  vehiclesD: PropTypes.string.isRequired,
  vehiclesR: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  transportation: PropTypes.object.isRequired
}

export default StepTwo
