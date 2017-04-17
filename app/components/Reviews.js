import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'

function Reviews (props) {
  return(
    <div className="review-size">
      <div className="container" >
        <div className="jumbotron commentbox">
          <div className="col-md-1 imggap"><img src = "app/img/places/000008.jpg" alt = "doisuthep"  width="40" height="40"/></div>
          <div className="username col-md-11"><b>Arpa Assawabenjang</b></div>
          <div className="comment col-md-9">First comment! ee eeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeee eeeeeeeeeeeeeeeeeee</div>
      </div>
    </div>


    	<ul className = "breadcrumb" style = {styles.space}>
  			<li className = "active"><a href="#">1</a></li>
  			<li><a href="#">2</a></li>
  			<li><a href="#">3</a></li>
		</ul>
		<div className = "form-group">
              <textarea
                className = 'form-control'
                placeholder = 'Write your comment'
                rows = '5'
                type='text'
               />
        </div>
        <div className = "form-group col-xs-4 col-xs-offset-4">
              <button
                className = "btn btn-block btn-success"
                type = "submit">
                  Send
              </button>
        </div>
        <div>
        	<div style = {styles.space}>
        		<h4 className = "text-left">Creator</h4>
        		<div className = "well well-lg">
				</div>
			</div>
			<div style = {styles.gapp}>
        		<h4 className = "text-left">Others</h4>
        		<div className = "well well-lg">
				</div>
			</div>
			<div style = {styles.gap}>
        		<div className = "well well-lg">
				</div>
			</div>
			<div style = {styles.gap}>
        		<div className = "well well-lg">
				</div>
			</div>
		</div>
    </div>
   )
 }

export default Reviews
