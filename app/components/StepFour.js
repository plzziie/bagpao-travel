import React, {Component} from 'react'
import {PropTypes} from 'react'
import ReactDOM, {findDOMNode} from 'react-dom';
import styl from '../styles/stepfour.css'
import styles from '../styles'
import style from '../styles/step.css'

function StepFour (props) {
  console.log(props);
  var tmp = [];
  for (var i = 0; i < props.daytrip; i++) {
    tmp.push(i);
  }
    return(
      <div>
      <div className="container-fluid">
      <ul className = "stepone nav nav-pills nav-justified">
        <li><a href = "/stepone">Step 1</a></li>
        <li><a href = "/steptwo">Step 2</a></li>
        <li><a href = "/stepthree">Step 3</a></li>
        <li className="active"><a href = "stepfour">Step 4</a></li>
      </ul>
    </div>
    <div className="container">
    <form onSubmit = {props.onSubmitTrip}>
      <div className = "container step-bottom">
      <h4 className="step4_header">Successful! This is your plan.</h4>
      <div className = "col-md-offset-2 col-md-2">
          <img className="img-circle" src="app/img/HKM_0353.jpg" width="100" height="100"/>
      </div>
          <div className="col-md-5">
          <h5>Name</h5>
          <input type = "text" className = "form-control"  placeholder = "Name" onChange = {props.onUpdateName}/>
          </div>
          <div className="col-md-5">
          <h5>Privacy</h5>
          <label className="radio-inline">
          <input type="radio" name="optradio" value = "private" onChange = {props.onUpdatePrivacy}/>Private
          </label>
          <label className="radio-inline">
          <input type="radio" name="optradio" value = "public" defaultChecked={true} onChange = {props.onUpdatePrivacy}/>Public
          </label>
          </div>
        </div>

        <div className="container">
          <div className="col-md-offset-2 stepthree_day">
            <div className="row scrollmenu">
            {tmp.map((val, index) => {
              return <div key = {index} className="day">
                <div className="inday">Day {val+1}</div>
                  <div className="planbox">

                        {props.details.map((vals, indexs) => {
                            return (vals.days == index+1) ?
                            <div key = {indexs} className="dragbox"><div className="col-md-3">
                            <img className = "img-circle" src = {vals.picture} alt = {vals.name[0]} width="50" height="50"/></div>
                            <div className="col-md-8"><h5>{vals.name[0]}</h5> <h6>{vals.city[0]}</h6></div>
                            </div>
                          : null })}
                          
                </div></div> })}
          </div>
        </div>
      </div>

          <div className="col-md-offset-5 col-sm-offset-4 col-xs-offset-4 col-md-3 col-sm-4 col-xs-4 step-bottom " >
            <button  type = "submit" className = "button form-control">
                Done</button>
          </div>
        </form>
  </div>
</div>

    )
  }


StepFour.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateName: PropTypes.func.isRequired,
  onUpdatePrivacy: PropTypes.func.isRequired,
  depart: PropTypes.string.isRequired,
  return: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  privacy: PropTypes.string.isRequired,
  result: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired
}

export default StepFour
