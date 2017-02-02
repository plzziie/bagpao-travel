import React, {Component} from 'react'
import styles from '../styles'
import Places from '../components/Places' 
 
class PlacesContainer extends Component {
  render() {
    return(
     <Places
      header = {this.props.route.header}
      />
    )
  }
}
 
export default PlacesContainer