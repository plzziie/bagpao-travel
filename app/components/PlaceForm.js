import React, {Component} from 'react'
import {PropTypes} from 'react'
import ReactRouter,{browserHistory} from 'react-router'
import styles from '../styles'
import style from '../styles/detail.css'

function PlaceForm (props) {
console.log(props);
  return(
    <div className="container-fluid step-bottom">
      <div className="container step-bottom ">

        { props.show.map((val, index) => {
          return <div key = {index}><div className = "text-center"><div className = "detail_header">{val.name[0].toUpperCase()}</div>
                 <img className = "img " src={val.picture} alt = {val.name[0]}  width = "376" height = "251"/></div>
                 <div className = "contentdetail col-md-offset-3 col-md-6">
                 <label>Description</label>
                 <p>{val.description}</p>
                 <label>Contact</label> <p>{val.contact}</p>
               </div></div>
         })}
       </div>
         <div className="col-md-offset-5 col-xs-offset-5 col-sm-offset-5" style = {styles.gapp}>
           <button className="btn btn-success col-md-3 col-sm-2 col-xs-3" onClick = {browserHistory.goBack}>Back</button>
         </div>
    </div>
    )
  }

  PlaceForm.PropTypes = {
  show: PropTypes.object.isRequired
  }

export default PlaceForm
