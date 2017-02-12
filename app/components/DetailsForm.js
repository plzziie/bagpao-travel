import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'
import Details from '../components/Details'
import Reviews from '../components/Reviews'

function DetailsForm (props) {
  return(
    <div>
    	<div className = "jumbotron col-xs-12 text-center">
        	<h1> Trip Name </h1>
        </div>
        <div className = "jumbotron col-xs-6 col-xs-offset-3 text-center" style = {styles.transparentBg}> 
          <ul className = "nav nav-tabs nav-justified">
          		<li className = "active"><a data-toggle = "tab" href = "#details"><h3>Details</h3></a></li>
          		<li><a data-toggle = "tab" href = "#reviews"><h3>Reviews</h3></a></li>
        	</ul>
        	<div className = "tab-content">
          		<div id = "details" className = "tab-pane fade in active">
          			<center><Details/></center>
          		</div>
          		<div id = "reviews" className = "tab-pane fade">
            		<center><Reviews/></center>
          		</div>
        	</div>
        </div>
    </div>
    )
  }

export default DetailsForm