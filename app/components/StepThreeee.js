import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

import ToDoList from '../lib/todolist.js'
import '../styles/UI.css'

function StepThreeee (props) {
  console.log(props)
    return(
      <div className="container">
      <div className = "todo">
					<div className = "todo-header">TRIPS</div>
					<ToDoList />
			</div>
      </div>
    )
	}

StepThreeee.PropTypes = {

  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
  onUpdatePlaces: PropTypes.func.isRequired,
  fromsearch: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  places: PropTypes.string.isRequired,
  placess: PropTypes.array.isRequired

}

export default StepThreeee
