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
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
        <li>Step 4</li>
        <li className="active"><a href = "/stepfive">Step 5</a></li>
      </ul>
    </div>
    <div className="container">
    <form onSubmit = {props.onSubmitTrip}>
      <div className = "container step-bottom">
      <h4 className="step4_header">Successful! This is your plan.</h4>
      <div className = "col-md-offset-2 col-md-2">
          <img className="img" id ="output" src="app/img/HKM_0353.jpg" width="200" height="134" className = "col-xs-offset-1"/>
          <input type = "file" style = {styles.gap} onChange = {(event) => props.onUpdatePicture(event)} />
      </div>
          <div className="col-md-4 col-md-offset-1">
          <h5>Name</h5>
          <input type = "text" className = "form-control"  placeholder = "Name" required onChange = {props.onUpdateName}/>
          </div>
          <div className="col-md-5 col-md-offset-1">
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
                            <div key = {indexs} className="dragbox">
                            <div className="col-md-3"><h5>{vals.time}</h5></div>
                            <div className="col-md-6"><h5>{vals.name[0]}</h5> <h6>{vals.city[0]}</h6></div>
                            <div className="col-md-3"><img className = "img-circle" src = {vals.picture} alt = {vals.name[0]} width="50" height="50"/></div>
                            </div>
                          : null })}
                </div></div> })}
          </div>
        </div>
      </div>

      <div className="col-md-offset-2 col-md-3" style = {styles.gapp}>
        <div className="pricetotal">Price total: {props.prices}฿</div>
      </div>
      <div className="col-md-offset-4 col-md-5" >
      </div>

          <div className="col-md-offset-4 col-sm-offset-3 col-xs-offset-3 col-md-3 col-sm-4 col-xs-4 step-bottom " >
            <button  type = "submit" className = "button form-control buttonstep4">
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
  onUpdatePicture: PropTypes.func.isRequired,
  depart: PropTypes.string.isRequired,
  return: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  privacy: PropTypes.string.isRequired,
  result: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
  picture: PropTypes.object.isRequired,
  prices: PropTypes.number.isRequired
}

export default StepFour
