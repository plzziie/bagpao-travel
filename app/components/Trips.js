import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function Trips (props) {
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
    )
  }

  Trips.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Trips