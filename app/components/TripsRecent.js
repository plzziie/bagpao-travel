import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import Trips from '../containers/TripsContainer'

function TripsRecent (props) {
    return(
    <div>
      <div className = "jumbotron text-center"  style = {styles.transparentBg}>
        <h2>{props.header}</h2>
        <div className = "col-xs-12" style = {styles.gap}>
          <form onSubmit = {props.onSubmitUser}>
            <div className = "form-group col-xs-6 col-xs-offset-3">
              <input
                className = "form-control"
                placeholder = 'Trip Name/ City/ Place'
                onChange = {props.onUpdateUser}
                defaultValue = {props.username}
                type = 'text' />
            </div>
            <div className = "form-group col-xs-1">
              <button
                className = "btn btn-block btn-success"
                type = "submit">
                  Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className = "row" style = {styles.space}>
      <div className = "dropdown">
        <h2 className = "col-xs-offset-2"><strong>All Trips</strong></h2>
        <button className = "btn btn-default dropdown-toggle col-xs-offset-10" type = "button" data-toggle = "dropdown">
        <span className = "caret"></span></button>
        <ul className = "dropdown-menu col-xs-offset-10">
          <li><a href="/trips">Popular</a></li>
          <li className = "active"><a href="/tripsrecent">Recent</a></li>
        </ul>
      </div>
      <div style = {styles.space}>
      <div className = "col-xs-4" style = {styles.center}>
          <img className = "img" src = "app/img/chiangdao.jpg" alt = "Northnow" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>North Now</h4>
          <h5>by nokky</h5>
        </div>
        <div className = "col-xs-4" style = {styles.center}>
          <img className = "img" src = "app/img/phuket.jpg" alt = "Phuketgetaway" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>Phuket Get Away</h4>
          <h5>by daojai</h5>
        </div>
        <div className  = "col-xs-4" style = {styles.center}>
          <img className = "img" src="app/img/bkk.jpg" alt = "Onedaytour" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>One Day Tour</h4>
          <h5>by nanon</h5>
        </div>
      </div>
      </div>
    </div>
    )
  }

export default TripsRecent