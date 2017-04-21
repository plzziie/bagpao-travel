import React from 'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from '../styles'

function MyTrip (props) {
	console.log(props);
	return (
    )
  }
	
	MyTrip.PropTypes = {
	member: PropTypes.bool.isRequired,
	mytrip: PropTypes.bool.isRequired,
	username: PropTypes.string.isRequired
}

export default MyTrip
