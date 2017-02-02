import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles'

var Main = React.createClass({
  render: function () {
    return (
      <div>
      	<Navbar/>
      	{this.props.children}
      </div>
    )
  }
});

export default Main