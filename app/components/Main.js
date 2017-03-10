import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles'


class Main extends Component {
  render() {
    return (
      <div>
      	<Navbar/>{this.props.children}

          <div className="container-fluid footer text-center">
            <h5>Information Engineering</h5>
          </div>

      </div>
    )
  }
}

export default Main
