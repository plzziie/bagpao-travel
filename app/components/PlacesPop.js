import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import Places from '../containers/PlacesContainer'

function PlacesPop (props) {
  return(
    <div>
      <div className = "jumbotron text-center"  style = {styles.transparentBg}>
        <h2>{props.header}</h2>
        <div className = "col-xs-12" style = {styles.gap}>
          <form onSubmit = {props.onSubmitUser}>
            <div className = "form-group col-xs-6 col-xs-offset-3">
              <input
                className = "form-control"
                placeholder = 'Place/ City'
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
        <button className = "btn btn-default dropdown-toggle col-xs-offset-10" type = "button" data-toggle = "dropdown">
        <span className = "caret"></span></button>
        <ul className = "dropdown-menu col-xs-offset-10">
          <li ><a href="/places">Categories</a></li>
          <li className = "active"><a href="/placespop">Popular</a></li>
        </ul>
      </div>
      <div style = {styles.space}>
      <div className = "col-xs-4" style = {styles.center}>
        <img className = "img" src = "app/img/chiangmai.jpg" alt = "doisuthep" width = "200" height = "150"/>
        <h4 style = {styles.gapp}>Doi Suthep-Pui National Park</h4>
        <h5>Chiangmai</h5>
      </div>
      <div className = "col-xs-4" style = {styles.center}>
        <img className = "img" src = "app/img/samui.jpg" alt = "samui" width = "200" height = "150"/>
        <h4 style = {styles.gapp}>Samui Island</h4>
        <h5>Surat Thani</h5>
      </div>
      <div className  = "col-xs-4" style = {styles.center}>
        <img className = "img" src="app/img/huahin.jpg" alt = "samroiyot" width = "200" height = "150"/>
        <h4 style = {styles.gapp}>Khao Sam Roi Yot National Park</h4>
        <h5>Prachuap Khiri Khan</h5>
      </div>
      </div>
      </div>
    </div>
    )
}

export default PlacesPop