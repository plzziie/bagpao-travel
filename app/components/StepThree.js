import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function StepThree (props) {
  console.log(props);
    return(
<div>

</div>
    )
}

StepThree.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateDeparture: PropTypes.func.isRequired,
  onUpdateReturn: PropTypes.func.isRequired,
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
