import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

function StepTwo (props) {
  console.log(props);
    return(
      <div className="container-fluid">
      <ul className = "stepone nav nav-pills nav-justified">
        <li><a href = "/stepone">Step 1</a></li>
        <li><a href = "/steptwo">Step 2</a></li>
        <li><a href = "/stepthree">Step 3</a></li>
        <li className="active"><a href = "stepfour">Step 4</a></li>
      </ul>
      </div>
    )
}

StepTwo.PropTypes = {

}

export default StepTwo
