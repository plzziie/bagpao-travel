import React, {Component} from 'react'
import {PropTypes} from 'react'
import ReactDOM, {findDOMNode} from 'react-dom';
import styles from '../styles'
import style from '../styles/step.css'
import TodoBox from '../lib/todobox.js'

function StepThreeee (props) {
  console.log(props)
    return(
      <TodoBox />
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
