import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

function StepThreeee (props) {
  console.log(props)
    return(
      <div>
        <div className="container-fluid">
        <ul className = "stepone nav nav-pills nav-justified">
          <li><a href = "/stepone">Step 1</a></li>
          <li><a href = "/steptwo">Step 2</a></li>
          <li className="active"><a href = "/stepthree">Step 3</a></li>
          <li><a href = "stepfour">Step 4</a></li>
        </ul>
        </div>

        <div className = "jumbotron text-center" style = {styles.transparentBg}>
        <form onSubmit = {props.onSubmitTrip}> {props.places.map((val, index) => {
             return (val.categories == 'null')
             ? null
             : <h5><input type = "checkbox" value = {val.name} key = {index} onChange = {props.onUpdatePlaces}/>{val.name}</h5>
           })}

           <div className="col-md-3 col-xs-4">
           <button type = "submit" className = "buttonplan form-control">Submit</button>
           </div>
        </form>
        </div>
      </div>
    )
}

StepThreeee.PropTypes = {

  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
  onUpdatePlaces: PropTypes.func.isRequired,
  fromsearch: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  places: PropTypes.string.isRequired,
  placess: PropTypes.array.isRequired

}

export default StepThreeee
