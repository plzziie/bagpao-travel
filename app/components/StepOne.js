import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function StepOne (props) {
  console.log(props);
    return(
      <div>
      <ul className = "nav nav-pills nav-justified">
        <li><a href = "/stepone">Step 1</a></li>
        <li><a href = "/steptwo">Step 2</a></li>
        <li><a href = "/stepthree">Step 3</a></li>
        <li><a href = "/stepfour">Step 4</a></li>
      </ul>

      <div className = "container container_con col-md-10 col-md-offset-1" >
        <div className = "row">
        <form onSubmit = {props.onSubmitTrip}>
        <div className = "col-md-3 col-sm-6 col-xs-12" >
            <h4>From</h4>
            <input type = "text"  className = "form-control" placeholder = "Enter your origin" onChange = {props.onUpdateOrigin}
                        defaultValue = {props.origin}/>
        </div>
        <div className = "col-md-3 col-sm-6 col-xs-12" >
          <h4>To</h4>
            <input type = "text" className = "form-control" placeholder = "Enter your destination" onChange = {props.onUpdateDestination}
                        defaultValue = {props.destination}/>
        </div>

        <div className = "col-md-3 col-sm-6 col-xs-6">
          <h4>Days</h4>
            <select style = {styles.left} type = "submit" id="howlong" className = "btn btn-default howlong" onChange = {props.onUpdateDaytrip}
                        defaultValue = {props.daytrip}>
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
      <div className = "col-xs-3 col-xs-offset-3" style = {styles.gapp}>
        <button type = "button" className = "button form-control">
           Save
        </button>
        <button type = "submit" className = "button form-control">
           Next
        </button>
        </div>
        </form>
      </div>
      </div>
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
  daytrip: PropTypes.string.isRequired
}

export default StepOne
