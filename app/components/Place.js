import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/trips.css'
import sty from '../styles/places.css'

function Place (props) {
  console.log(props);
  return(
    <div className="container-fluid step-bottom">
      <div className = "jumbotron text-center"  style = {styles.transparentBg}>
        <h2 className="title2">{props.header}</h2>
      </div>

    {/*  <div className = "form-group col-md-1 col-xs-2" style={styles.transparentBg}>
        <button
          className = "btn btn-block btn-success"
          type = "submit">
            Search
        </button>
      </div>

      อยากได้ปุ่ม back เด้ออ */}

        <div className="container-fluid footergap">
        <div className = "col-md-offset-1 col-md-10 transparentBg">
        {props.show.map((val, index) => {
             return <div key = {index} className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo"
             onClick={() => props.SeeDetails(val.name[0])}>
               <img className = "img" src = {val.picture} alt = {val.name[0]} width="376" height="251" onClick={() => props.UpdateView(val.name[0])}/>
               <div className="bottomleft1">{val.name[0].toUpperCase()}</div>
               <div className="box"></div>
               <div className="bottomleft2">{val.city[0].toUpperCase()}</div>
               </div>
            })}
        </div>
        </div>

        <div className="col-md-offset-5">
          <a className="btn btn-success col-md-3" href="/places" role="button">Back</a>
        </div>
  </div>
    )
}

Place.PropTypes = {
  SeeDetails: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  show: PropTypes.object.isRequired,
  UpdateView: PropTypes.func.isRequired
}

export default Place
