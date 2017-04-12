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


        <form onSubmit = {props.onSubmitTrip}>
          <div className="container">

            <div className = "col-md-5 col-sm-offset-0 col-sm-6">
            <h2>Departure</h2>
              <div className = "col-xs-10 ">
              <p className = "form-control-static">{props.origin}</p>
              <select onChange = {props.onUpdateVehiclesD} >
                  <option value = "null">Transportation</option>
                  <option value = "bus">Bus</option>
                  <option value = "train">Train</option>
                  <option value = "plane">Plane</option>
               </select>
               <select onChange = {props.onUpdateDepart}> {props.transportation.map((val, index) => {
                    return (val.type == props.vehiclesD)
                    ? (val.origin == props.origin)
                      ? <option value = {val.name} key = {index}>From {val.stationstart} ({val.depart}) To {val.stationend} ({val.arrive})</option>
                      : null
                    : null
                  })}
                  </select>
              <p className = "form-control-static">{props.destination}</p>
              </div>
            </div>

            <div className = "col-md-5 col-sm-offset-0 col-sm-6">
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
                    ? (val.origin == props.destination)
                      ? <option value = {val.name} key = {index}>From {val.stationstart} ({val.depart}) To {val.stationend} ({val.arrive})</option>
                      : null
                    : null
                  })}
              </select>
              <p className = "form-control-static">{props.origin}</p>
              </div>
            </div>

            <div className = "col-xs-4 col-xs-offset-4" style = {styles.space}>
              <button type = "submit" className = "step-bottom button form-control">
               Next
               </button>
            </div>
          </div>
          </form>
        </div>

    )
}

StepTwo.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
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
  transportation: PropTypes.object.isRequired
}

export default StepTwo
