import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import PlacesPop from '../components/PlacesPop'
import style from '../styles/trips.css'
import sty from '../styles/places.css'

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
            <div className = "form-group col-md-1 col-xs-2">
              <button
                className = "btn btn-block btn-success"
                type = "submit">
                  Search
              </button>
            </div>
          </form>
        </div>
      </div>


      <div className = "jumbotron col-md-offset-1" style={styles.transparentBg}>
        <div className = "title2 col-md-offset-0 col-sm-offset-0 col-xs-offset-1 col-md-3 col-sm-3 col-xs-3" >
            <h2>Categories</h2>
        </div>
        <div className = "col-md-offset-7 col-sm-offset-6 col-xs-offset-5 col-md-2 col-sm-3 col-xs-3" >
          <div className = "dropdown">
          <button className = "btn btn-default dropdown-toggle" type = "button" data-toggle = "dropdown">
          <span className = "caret"></span></button>
          <ul className = "dropdown-menu" aria-labelledby="dropdownMenu1">
            <li className = "active"><a href="/places">Categories</a></li>
            <li><a href="/placespop">Popular</a></li>
          </ul>
        </div>
        </div>
        </div>

      <div className="container-fluid footergap">
    <div className = "col-md-offset-1 col-md-10 transparentBg" >


    <a href=""><div className="photoo">
      <img src="app/img/places/HKM_9050.jpg"/>
      <img src="app/img/places/000027.jpg"/>
      <img src="app/img/places/000030.jpg"/>
      <div className="text national">National Park</div>
  </div></a>

    <a href=""><div className="photoo">
      <img src="app/img/places/000008.jpg"/>
      <img src="app/img/places/000018.jpg"/>
      <img src="app/img/places/000031.jpg"/>
      <div className="text temple">Temple</div>
  </div></a>

    <a href=""><div className="photoo">
      <img src="app/img/places/HKM_0504.jpg"/>
      <img src="app/img/places/HKM_0353.jpg"/>
      <img src="app/img/places/000015.jpg"/>
      <div className="text beach">Beach</div>
  </div></a>





    </div>
  </div>
      </div>
    )
}

export default Places
