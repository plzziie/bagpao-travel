import React, {Component} from 'react'
import TripDetail from '../components/TripDetail'

class TripDetailContainer extends Component {
  render() {
    return(
     <TripDetail/>
    )
  }
}

TripDetailContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripDetailContainer
