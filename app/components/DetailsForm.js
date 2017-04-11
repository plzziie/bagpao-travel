import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'
import Details from '../components/Details'
import Reviews from '../components/Reviews'

function DetailsForm (props) {
  return(
    <div className="container-fluid">

      <div className = "text-center">
          <div className="detail_header "> Trip Name </div>
      </div>
        <div className = "jumbotron col-md-10  col-md-offset-1 text-center" style = {styles.transparentBg}>
          <ul className = "nav nav-tabs nav-justified step-bottom">
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
