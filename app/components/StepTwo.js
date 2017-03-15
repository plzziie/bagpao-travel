import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function StepTwo (props) {
  console.log(props);
    return(
      <div>
      <ul className = "nav nav-pills nav-justified">
        <li><a href = "/stepone">Step 1</a></li>
        <li><a href = "/steptwo">Step 2</a></li>
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
          <form className = "form-horizontal" style = {styles.space}>
            <div className = "form-group" onSubmit = {props.onSubmitTrip}>
              <div className = "col-xs-10">
              <p className = "form-control-static">{props.origin}</p>
              <p className = "form-control-static" style = {styles.gapp}>VK123 Vietjet Airlines BKK 06.00 - HKT 08.00
              <button type = "button" className = "btn btn-link">Change</button></p>
              <p className = "form-control-static">{props.destination}</p>
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

      <div className = "col-xs-3 col-xs-offset-3" style = {styles.space}>
      <button type = "button" className = "button form-control">
         Save
      </button>
      <button type = "submit" className = "button form-control">
         Next
      </button>
      </div>
      </div>

    )
}

StepTwo.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateDeparture: PropTypes.func.isRequired,
  onUpdateReturn: PropTypes.func.isRequired,
  departure: PropTypes.string.isRequired,
  retrn: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired
}

export default StepTwo
