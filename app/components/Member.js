import React from 'react'
import {PropTypes} from 'react'
import {Link} from 'react-router'
import styles from '../styles'

function Member (props) {
  return(
    <div className="container-fluid">
      <div className = "jumbotron col-xs-4 col-xs-offset-1 text-center">
        <div><img className = "img-circle" src = "app/img/pic.jpg" alt = "profile" width = "200" height = "200"/></div>
        <div><Link to = "/editprofile">Edit Profile</Link></div>
        <div className = "btn-group" data-toggle = "buttons" style = {styles.gap}>
          <label className = "btn btn-default active">
            <input type = "radio" name = "public" id = "public" checked />Public
          </label>
          <label className = "btn btn-default ">
            <input type = "radio" name = "private" id = "private" />Private
          </label>
        </div>
        <div style = {styles.gapp}>
          <h4><u>Interest</u></h4>
          <div className = 'well' />
        </div>
        <div style = {styles.gapp}>
          <h4><u>Bio</u></h4>
          <div className = 'well well-lg' />
        </div>
      </div>
      <div className = "jumbotron col-xs-6 text-center" style = {styles.transparentBg}>
      <nav className = "navbar navbar-default" style = {styles.transparentBg}>
        <div className = "row">
          <div className = "col-xs-offset-3">
            <ul className = "nav navbar-nav">
              <li><a href = "/mytrip"><h4>My Trips</h4></a></li>
              <li><a href = "/draft"><h4>Draft</h4></a></li>
              <li><a href = "/favorite"><h4>Favorite</h4></a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className = "row" style = {styles.space}>
      <div className = "col-xs-6" style = {styles.center}>
        <img className = "img" src = "app/img/chiangmai.jpg" alt = "doisuthep" width = "200" height = "150"/>
        <h4 style = {styles.gapp}>Doi Suthep-Pui National Park</h4>
        <h5>Chiangmai</h5>
      </div>
      <div className = "col-xs-6" style = {styles.center}>
        <img className = "img" src = "app/img/samui.jpg" alt = "samui" width = "200" height = "150"/>
        <h4 style = {styles.gapp}>Samui Island</h4>
        <h5>Surat Thani</h5>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Member
