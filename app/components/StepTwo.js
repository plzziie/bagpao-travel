import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

function StepTwo (props) {
  console.log(props);
    return(
      <div className="container-fluid">
        <ul className = "stepone nav nav-pills nav-justified">
          <li><a href = "/stepone">Step 1</a></li>
          <li className="active"><a href = "/steptwo">Step 2</a></li>
          <li><a href = "/stepthree">Step 3</a></li>
          <li><a href = "stepfour">Step 4</a></li>
        </ul>

      <div className = "col-xs-6 col-xs-offset-3" style = {styles.space}>
      <ul className = "nav nav-tabs nav-justified">
        <li className = "active"><a href="#departure" data-toggle = "tab">Departure</a></li>
        <li><a href="#return" data-toggle = "tab">Return</a></li>
      </ul>
      <div className = "tab-content">
        <div id = "departure" className = "tab-pane fade in active">
          <form className = "form-horizontal" style = {styles.space} onSubmit = {props.onSubmitTrip}>
            <div className = "form-group">
              <div className = "col-xs-10">
              <p className = "form-control-static">{props.origin}</p>

              <select onChange = {props.onUpdateDeparture}>
                  <option value = "transportation" disabled = "true">Transportation</option>
                  <option value = "bus">Bus</option>
                  <option value = "train">Train</option>
                  <option value = "plane">Plane</option>
               </select>



               {props.transportation.map(function (
                 i) { return i.trainnumber })}



              <p className = "form-control-static">{props.destination}</p>

              <div className = "col-xs-3 col-xs-offset-3" style = {styles.space}>
                <button type = "submit" className = "button form-control">
                 Next
                 </button>
                </div>

              </div>
            </div>
          </form>
        </div>

        <div id = "return" className = "tab-pane fade">
          <form className = "form-horizontal" style = {styles.space}>
            <div className = "form-group">
              <div className = "col-xs-10">
              <p className = "form-control-static">{props.destination}</p>
              <p className = "form-control-static" style = {styles.gapp}>VK321 Vietjet Airlines HKT 18.00 - BKK 20.00
              <button type = "button" className = "btn btn-link">Change</button></p>
              <p className = "form-control-static">{props.origin}</p>
              </div>
            </div>
          </form>
        </div>



      </div>
      </div>
      </div>

    )
}

StepTwo.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateDeparture: PropTypes.func.isRequired,
  onUpdateReturn: PropTypes.func.isRequired,
  depart: PropTypes.string.isRequired,
  arrive: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  vehicles: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  transportation: PropTypes.object.isRequired
}

export default StepTwo
