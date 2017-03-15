import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import PlacesPop from '../components/PlacesPop'

function Places (props) {
  return(
    <div>
      <div className = "jumbotron text-center"  style = {styles.transparentBg}>
        <h2 className="title2">{props.header}</h2>
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
            <div className = "form-group col-md-2 col-sm-2 col-xs-2">
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
          <li className = "active"><a href="/places">Categories</a></li>
          <li><a href="/placespop">Popular</a></li>
        </ul>
      </div>
      <div style = {styles.space}>
      <div className = "col-xs-6 col-xs-offset-3" style = {styles.center}>
        <div className = "list-group">
          <a href = "#" className = "list-group-item list-group-item-info">Beach</a>
          <a href = "#" className = "list-group-item list-group-item-info">National Park</a>
          <a href = "#" className = "list-group-item list-group-item-info">Forest</a>
          <a href = "#" className = "list-group-item list-group-item-info">Museum</a>
          <a href = "#" className = "list-group-item list-group-item-info">Zoo</a>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
}

export default Places
