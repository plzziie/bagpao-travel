import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

function StepTwo (props) {
  console.log(props);
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
      <div className = "container">
      <h4 className="step4_header">Successful! This is your plan.</h4>
      <div className = "col-md-offset-2 col-md-2">
          <img className="img-circle" src="app/img/HKM_0353.jpg" width="100" height="100"/>
      </div>
          <div className="col-md-5">
          <h5>Name</h5>
          <input type = "text" className = "form-control"  placeholder = "Name"/>
          </div>
          <div className="col-md-5">
          <h5>Privacy</h5>
          <label className="radio-inline">
          <input type="radio" name="optradio"/>Private
          </label>
          <label className="radio-inline">
          <input type="radio" name="optradio"/>Public
          </label>
          </div></div>

          <div className="container step-bottom">
          <div className="overall">
            <div className="row scrollmenu">
              <div className="planbox">
                   <div className="day">Day 1</div>
                   <div className="dragbox"><div className="col-md-3">
                     <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                     <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
                   </div>
              </div>
              <div className="planbox">
                   <div className="day">Day 2</div>
                   <div className="dragbox"><div className="col-md-3">
                     <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                     <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
                   </div>
              </div>
              <div className="planbox">
                   <div className="day">Day 3</div>
                   <div className="dragbox"><div className="col-md-3">
                     <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                     <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
                   </div>
              </div>
            </div>
          </div>
        </div>


          <div className="col-md-offset-5 col-sm-offset-4 col-xs-offset-4 col-md-3 col-sm-4 col-xs-4 step-bottom " >
            <button  type = "submit" className = "button form-control">
                Done</button></div>

  </div>
</div>

    )
  }


StepTwo.PropTypes = {
}

export default StepTwo
