import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import TripsRecent from '../components/TripsRecent'
import style from '../styles/trips.css'

function Trips (props) {
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
                placeholder = 'Trip Name/ City/ Place'
                onChange = {props.onUpdateUser}
                defaultValue = {props.name}
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

      <div className = "jumbotron col-md-offset-1" style={styles.transparentBg}>
        <div className = "col-md-3 col-sm-4 col-xs-3" >
            <h2>All trips</h2>
        </div>
        <div className = "col-md-offset-7 col-sm-offset-2 col-xs-offset-2 col-md-2 col-sm-3 col-xs-3" >
          <div className = "dropdown">
          <button className = "btn btn-default dropdown-toggle" type = "button" data-toggle = "dropdown">
          <span className = "caret"></span></button>
          <ul className = "dropdown-menu" aria-labelledby="dropdownMenu1">
            <li className = "active"><a href="/trips">Popular</a></li>
            <li><a href="/tripsrecent">Recent</a></li>
          </ul>
        </div>
        </div>
        </div>

      <div className="container-fluid footergap">
      <div className = "col-md-offset-1 col-md-10 transparentBg" >
          <h3 className="title col-xs-offset-1 col-md-offset-0 col-sm-offset-0">Popular Trips</h3>
      <div className = "row tripgap" id ='test'>
        <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0  photo">
          <img className = "img" src = "app/img/chiangdao.jpg" alt = "Northnow" width="376" height="251"/>
          <div className="bottomleft1">Chiang Dao</div>
          <div className="box"></div>
          <div className="bottomleft2">by nokky</div>
        </div>
        <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
          <img className = "img" src = "app/img/phuket.jpg" alt = "Phuketgetaway"  width="376" height="251"/>
          <div className="bottomleft1">Phuket Get Away</div>
          <div className="box"></div>
          <div className="bottomleft2">by daojai</div>
        </div>
        <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
          <img className = "img" src="app/img/bkk.jpg" alt = "Onedaytour"  width="376" height="251"/>
          <div className="bottomleft1">One Day Tour</div>
          <div className="box"></div>
          <div className="bottomleft2">by nanon</div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  }

  Trips.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  message: PropTypes.array.isRequired,
  creator: PropTypes.array.isRequired
}

export default Trips
