import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

function StepOne (props) {
  console.log(props);
    return(
      <div className="container-fluid">
        <ul className = "stepone nav nav-pills nav-justified">
        <li className="active"><a href = "/stepone">Step 1</a></li>
        <li><a href = "/steptwo">Step 2</a></li>
        <li><a href = "/stepthree">Step 3</a></li>
        <li><a href = "/stepfour">Step 4</a></li>
        <li><a href = "/stepfive">Step 5</a></li>
      </ul>

        <form onSubmit = {props.onSubmitTrip}>
          <div className = "container col-md-10 col-md-offset-2" >
          <div className="row">
          <div className = "col-md-3 col-sm-4 col-sm-12 col-xs-11" >
            <h4>From</h4>
            <input type = "text"  className = "form-control" placeholder = "Enter your origin" onChange = {props.onUpdateOrigin}
                        defaultValue = {props.origin} required/>
        </div>
        <div className = "col-md-3 col-sm-4 col-sm-12 col-xs-11" >
          <h4>To</h4>
            <input type = "text" className = "form-control" placeholder = "Enter your destination" onChange = {props.onUpdateDestination}
                        defaultValue = {props.destination} required/>
        </div>

        <div className = "col-md-3 col-sm-4 col-sm-12 col-xs-12">
          <h4>Days</h4>
            <select style = {styles.left} type = "submit" id="howlong" className = "btn btn-default howlong" onChange = {props.onUpdateDaytrip}
                        defaultValue = {props.daytrip} required>
              <option>How many days?</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
        </div>
      </div>

        <div className="col-md-offset-3 col-sm-offset-4 col-xs-offset-4 col-md-4 col-sm-4 col-xs-4 step-bottom " >
            <button  type = "submit" className = "button form-control">
               Next
            </button></div>

      </div>
        </form>
      </div>

    )
}

StepOne.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateOrigin: PropTypes.func.isRequired,
  onUpdateDestination: PropTypes.func.isRequired,
  onUpdateDaytrip: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  transportation: PropTypes.object.isRequired
}

export default StepOne
