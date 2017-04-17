import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'

function Reviews (props) {
  return(
    <div className="review-size">

      <div className="container">
        <div className="container commentbox">
          <div className="col-md-1 col-sm-1 imggap"><img src = "app/img/places/000015.jpg" alt = "doisuthep"  width="40" height="40"/></div>
          &nbsp;<div className="username col-md-10 col-sm-10"><b>Arpa Assawabenjang</b></div>
          <div className="comment col-md-11 col-sm-10">First comment! ee eeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeee eeeeeeeeeeeeeeeeeee</div>
      </div>
      <div className="container commentbox">
        <div className="col-md-1 col-sm-1 imggap"><img src = "app/img/places/000015.jpg" alt = "doisuthep"  width="40" height="40"/></div>
        <div className="username col-md-10 col-sm-11"><b>Arpa Assawabenjang</b></div>
        <div className="comment col-md-11 col-sm-11">First comment! ee eeeeeeeeeeeeeeeeeee	ประกาศ: เรียนผู้ใช้งานระบบ Internet ของสถาบัน ฯ ที่ใช้ Web Browser ที่ระบบ Authen ของสถาบันฯรองรับคือ IE10 หรือต่ำกว่า
Mozilla, Firefox, Chrome ทางสำนักบริการคอมพิวเตอร์ของอภัยในความไม่สะดวก eeee eeeeeeeeeeeee eeeeeeeeeeeee</div>
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
      </div>


        <div className="creatorbox">
        	<div>
        		<h4 className = "text-left">Creator</h4>
        		<div className = "reviewbox">
              <div className="col-md-1 col-sm-1"><img className="img-circle" src = "app/img/places/000015.jpg" alt = "doisuthep"  width="50" height="50"/></div>
              <div className="col-md-4 col-sm-4 text-left creator"><b>John Smith</b></div>
				    </div>
			</div>

			<div style = {styles.gapp}>
        		<h4 className = "text-left">Others</h4>
              <div className = "reviewbox">
                <div className="col-md-1 col-sm-1 "><img className="img-circle" src = "app/img/places/000015.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                <div className="col-md-4 col-sm-4 text-left creator"><b>Bill Smith</b></div>
  				    </div>
			</div>

			<div style = {styles.gap}>
        <div className = "reviewbox">
          <div className="col-md-1 "><img className="img-circle" src = "app/img/places/000015.jpg" alt = "doisuthep"  width="50" height="50"/></div>
          <div className="col-md-4 text-left creator"><b>Jim Smith</b></div>
        </div>

			</div>

		</div>
    </div>
   )
 }

export default Reviews
