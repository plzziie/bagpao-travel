import React, {Component} from 'react'
import {PropTypes} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'
import style from '../styles/detail.css'

function PlaceForm (props) {
console.log(props);
  return(
    <div className="container-fluid">
        { props.show.map((val, index) => {
          return <div key = {index}><div className = "text-center"><div className = "detail_header">{val.name[0]}</div>
                 <img className = "img " src={val.picture} alt = {val.name[0]}  width = "376" height = "251"/></div>
                 <div className = "contentdetail col-md-offset-3 col-md-6">
                 <label>Description</label>
                 <p>{val.description}</p>
                 <label>Contact</label> <p>{val.contact}</p>
               </div></div>
         })}
    </div>
    )
  }

  PlaceForm.PropTypes = {
  show: PropTypes.object.isRequired
  }

export default PlaceForm
