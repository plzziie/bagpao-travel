import React, {Component} from 'react'
import {PropTypes} from 'react'
import Select from 'react-select'
import styles from '../styles/createplan.css'
import Country from '../lib/Country';

const STATES = require('../lib/Country');

function CreatePlan (props) {
var options = STATES[props.country];
  console.log(props);
    return (
      <div className = "container container_con col-md-10 col-md-offset-1">
        <div className="row">
        <form onSubmit = {props.onSubmitTrip}>

        <div className = "col-md-3 col-sm-6 col-xs-12" >
          <h4 className="fontwhite">From</h4>
          <input type = "text"
          className = "form-control"
          placeholder = "Enter your origin"
          onChange = {props.onUpdateOrigin}
          defaultValue = {props.origin}
          required />
          <Select type = "text" autofocus options = {options} clearable = {props.clearable} name = "selected-state"
          disabled = {props.disabled} value = {props.selectValue} onChange={props.UpdateValue}
          searchable = {props.searchable} className = "col-md-3 col-sm-6 col-xs-12" />
        </div>





        <div className = "col-md-3 col-sm-6 col-xs-12" >
          <h4 className="fontwhite">To</h4>
          <input type = "text"
          className = "form-control"
          placeholder = "Enter your destination"
          onChange = {props.onUpdateDestination}
          defaultValue = {props.destination}
          required />
        </div>

        <div className = "col-md-3 col-sm-6 col-xs-6">
          <h4 className="fontwhite">Days</h4>
            <select style = {styles.left}
            type = "submit"
            id = "howlong"
            className = "btn btn-default howlong"
            onChange = {props.onUpdateDaytrip}
            defaultValue = {props.daytrip}>
              <option>How many days?</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-6">
          <button type = "submit" className = "button form-control">
             Let's Plan&nbsp;<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
          </button>
        </div>
        </form>
        </div>
    </div>
    )
  }

  CreatePlan.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateOrigin: PropTypes.func.isRequired,
  onUpdateDestination: PropTypes.func.isRequired,
  onUpdateDaytrip: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  multiple: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  searchable: PropTypes.bool.isRequired,
  clearable: PropTypes.bool.isRequired,
  country: PropTypes.object.isRequired,
  selectValue: PropTypes.string.isRequired,
}

export default CreatePlan
