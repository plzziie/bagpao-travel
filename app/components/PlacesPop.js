import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import Places from '../containers/PlacesContainer'

function PlacesPop (props) {
  return(
    <div>
      <div className = "jumbotron text-center"  style = {styles.transparentBg}>
        <h2 className="title2">Find the places</h2>
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
            <h2>Popular</h2>
        </div>
        <div className = "col-md-offset-7 col-sm-offset-6 col-xs-offset-5 col-md-2 col-sm-3 col-xs-3" >
          <div className = "dropdown">
          <button className = "btn btn-default dropdown-toggle" type = "button" data-toggle = "dropdown">
          <span className = "caret"></span></button>
          <ul className = "dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="/places">Categories</a></li>
            <li className = "active"><a href="/placespop">Popular</a></li>
          </ul>
        </div>
        </div>
        </div>


      <div className="container-fluid footergap">
      <div className = "col-md-offset-1 col-md-10 transparentBg" >

      <div className = "row tripgap">
        <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0  photo">
          <img className = "img" src = "app/img/chiangmai.jpg" alt = "doisuthep" width="376" height="251"/>
          <div className="bottomleft1">Doi Suthep-Pui National Park</div>
          <div className="box"></div>
          <div className="bottomleft2">Chiangmai</div>
        </div>
        <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
          <img className = "img" src = "app/img/samui.jpg" alt = "samui"  width="376" height="251"/>
          <div className="bottomleft1">Samui Island</div>
          <div className="box"></div>
          <div className="bottomleft2">Surat Thani</div>
        </div>
        <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
          <img className = "img" src="app/img/huahin.jpg" alt = "samroiyot"  width="376" height="251"/>
          <div className="bottomleft1">Khao Sam Roi Yot National Park</div>
          <div className="box"></div>
          <div className="bottomleft2">Prachuap Khiri Khan</div>
        </div>
      </div>



    </div>
  </div>

    </div>
    )
}

export default PlacesPop
