import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles'


class Main extends Component {
  render() {
    return (
      <div className="contain-footer">
      	<Navbar/>{this.props.children}
      </div>
    )
  }
}

export default Main
