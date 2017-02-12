import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'

function Details (props) {
  return(
    <div>
    	<ul className = "breadcrumb" style = {styles.space}>
  			<li className = "active"><a href="#">1</a></li>
  			<li><a href="#">2</a></li>
  			<li><a href="#">3</a></li>
		</ul>
		<div className = "well well-lg">
		</div>
    </div>
   )
 }

export default Details