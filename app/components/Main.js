import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles'


class Main extends Component {
  render() {
    return (
      <div className="contain-footer">
      <Navbar/>{this.props.children}

        <div className="footer text-center">
          <h5>Information Engineering </h5>
          <h5>Copyright (c) 2017 Copyright Holder All Rights Reserved.</h5>
        </div>
    </div>
    )
  }
}

export default Main
