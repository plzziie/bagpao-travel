import React, {Component} from 'react'
import styles from '../styles'
import Contact from '../components/Contact'

class ContactContainer extends Component {
  render() {
    return(
     <Contact
     header = {this.props.route.header}
     />
    )
  }
}
 
export default ContactContainer