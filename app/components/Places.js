import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import PlacesPop from '../components/PlacesPop'
import style from '../styles/trips.css'
import sty from '../styles/places.css'

function Places (props) {
  console.log(props);
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
    <div className = "col-md-offset-1 col-md-10 transparentBg" id = "test">

    {props.places.map((val, index) => {
         return <div key = {index} className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0  photo">
           <img className = "img" src = {val.picture} alt = {val.name[0]} width="376" height="251"/>
           <div className="bottomleft1">{val.name[0]}</div>
           <div className="box"></div>
           <div className="bottomleft2">{val.city[0]}</div>
         </div>
    })}

    </div>
  </div>
  </div>
    )
}

export default Places
