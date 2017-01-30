import React from 'react'
import ReactRouter from 'react-router'
import {Link} from 'react-router'
import CreatePlan from '../components/CreatePlan'
import styles from '../styles'

var Home = React.createClass({
  render: function () {
    return (
     <div className = "jumbotron col-md-6 col-md-offset-3 text-center" style = {styles.transparentBg}>
       <CreatePlan/>
       <div className = "col-md-6 col-md-offset-3">
     <h2 style = {styles.space}><u> POPULAR TRIPS </u></h2>
     </div>
     </div>
     )
  }
});

export default Home