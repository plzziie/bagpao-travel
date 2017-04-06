import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'
import TodoBox from '../lib/todobox.js'

function StepThree (props) {
  console.log(props)
    return(
      <div>
        <div className="container-fluid">
        <ul className = "stepone nav nav-pills nav-justified">
          <li><a href = "/stepone">Step 1</a></li>
          <li><a href = "/steptwo">Step 2</a></li>
          <li className="active"><a href = "/stepthree">Step 3</a></li>
          <li><a href = "stepfour">Step 4</a></li>
        </ul>


        <h2>Drag and Drop</h2>
        <p>Drag the image back and forth between the two div elements.</p>

        <div style = {styles.dnd} onDrop = {props.drop} onDragOver = {props.allowDrop}>
          <img src = "./app/img/chiangdao.jpg" draggable = "true" onDragStart = {props.drag} id = "drag1" width = "180" height = "90"/>
        </div>

        <div style = {styles.dnd} onDrop = {props.drop} onDragOver = {props.allowDrop}></div>

          <div className="col-md-offset-4 col-sm-offset-4 col-xs-offset-4 col-md-4 col-sm-4 col-xs-4 step-bottom " >
              <button  type = "submit" className = "button form-control">
                 Next
              </button></div>
      </div>
    </div>


    )
}

StepThree.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateDeparture: PropTypes.func.isRequired,
  onUpdateReturn: PropTypes.func.isRequired,
  allowDrop: PropTypes.func.isRequired,
  drop: PropTypes.func.isRequired,
  drag: PropTypes.func.isRequired,
  depart: PropTypes.string.isRequired,
  arrive: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  vehicles: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default StepThree
