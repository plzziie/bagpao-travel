import React from 'react'
import ReactRouter from 'react-router'
import {Link} from 'react-router'
import CreatePlan from '../components/CreatePlan'
import styles from '../styles'

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div className = "jumbotron col-xs-6 col-xs-offset-3" style = {styles.transparentBg}>
          <CreatePlan/>
        </div>
        <div className = "jumbotron col-xs-12 text-center" style = {styles.transparentBg}>
          <h2><u> POPULAR TRIPS </u></h2>
        </div>
        <div className = "jumbotron col-xs-12 text-center" style = {styles.transparentBg}>
          <h2><u> POPULAR PLACES </u></h2>
        </div>
      </div>
    )
  }
});

export default Home