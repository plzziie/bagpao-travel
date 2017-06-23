import React, {Component} from 'react'
import {PropTypes} from 'react'
import ReactDOM, {findDOMNode} from 'react-dom'
import {Modal} from 'react-bootstrap'
import styles from '../styles'
import style from '../styles/step.css'

function StepHotel (props) {
  console.log(props)

  var tmp = [];
  for (var i = 0; i < props.daytrip; i++) {
    tmp.push(i);
  }

    return(
      <div>
        <div className="container-fluid">
          <ul className = "stepone nav nav-pills nav-justified">
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            <li className="active"><a href = "stepfour">Step 4</a></li>
            <li><a href = "/stepfive">Step 5</a></li>
          </ul>
        </div>
        <div className = "col-xs-6 col-xs-offset-1 text-center">
        {props.showModal ? <div className = "alert alert-danger" id = "fail" style = {styles.gapp}>
        Cannot drop more than one.</div> : null} </div>

        <div className="container">
          <div className="stepthree_day">
            <div className="row scrollmenu">
            {tmp.map((val, index) => {
              return <div key = {index} className="day" id ={index+1}>
                <div className="inday">Day {val+1}</div>
                <div className="planbox" id = {index+1} onDrop = {props.Drop} onDragOver = {props.AllowDrop}>
                </div>
                </div>})}
          </div>
        </div>

        <div className="stepthree_select">
          <div className="where">Where you want to go?</div>
              <ul className = "nav nav-pills nav-justified ">
                <li><a href="#search" data-toggle = "tab">Search</a></li>
                <li className = "active"><a href="#accommodation" data-toggle = "tab">Accommodation</a></li>
              </ul>

                <div className = "tab-content">
                  <div id = "accommodation" className = "tab-pane fade">
                    <div className="planboxright" id = "0" onDrop = {props.Drop} onDragOver = {props.AllowDrop}>
                    {props.places.map((val, index) => {
                        return (val.category == "accommodation")
                        ? <div key = {index} className="dragbox"  draggable = "true" onDragStart = {props.Drag} id = {val.placeid}>
                          {(props.result.map((vals, indexs) => {
                            return (vals.placeid == val.placeid)
                              ? <div className="col-md-2"><h5>{vals.time}</h5></div>
                              : null
                          }))}
                          <div className="col-md-7"><h5>{val.name[0]}</h5> <h6>{val.price} baht</h6></div>
                          <div className="col-md-3"><img className = "img-circle" src = {val.picture} alt = {val.name[0]} width="50" height="50"/></div>
                              </div>
                            : null
                      })}
                    </div>
                  </div>

                  <div id = "search" className = "tab-pane fade">
                  <div className="between">
                  <form onSubmit = {props.onGetSearch}>
                     <div className="form">
                     <input type = "text"  className = "form-control " placeholder = "search" onChange = {props.onUpdateSearch}/>
                     </div>
                     <div className="col-md-3 col-xs-4">
                     <button type = "submit" className = "buttonplan form-control">search</button>
                    </div>
                  </form>
                  </div>
                    <div className="planboxrights" id = "0" onDrop = {props.Drop} onDragOver = {props.AllowDrop}>
                      {props.found
                        ? props.place.map((val, index) => {
                          return <div key = {index} className="dragbox"  draggable = "true" onDragStart = {props.Drag} id = {val.placeid}>
                            {(props.result.map((vals, indexs) => {
                              return (vals.placeid == val.placeid)
                                ? <div className="col-md-2"><h5>{vals.time}</h5></div>
                                : null
                            }))}
                            <div className="col-md-7"><h6>{val.name[0]}</h6> <h6>{val.price} baht</h6></div>
                            <div className="col-md-3"><img className = "img-circle" src = {val.picture} alt = {val.name[0]} width="50" height="50"/></div>
                            </div>
                              })
                        : <h5>Cannot found this place</h5> }
                    </div>
                  </div>

                </div>
            </div>

            <div className="stepthree_select" style = {styles.gap}>
              <div className="where">Price</div>
              <ul className = "nav nav-pills nav-justified ">
                <h5>{props.prices} Baht</h5>
              </ul>
            </div>

            <form onSubmit = {props.onSubmitTrip}>
            <div className="col-md-offset-4 col-sm-offset-4 col-xs-offset-4 col-md-4 col-sm-4 col-xs-4 step-bottom">
             <button type = "submit" className = "button form-control">
               Next
             </button>
            </div>
            </form>
    </div>
    </div>
    )
}

StepHotel.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateTime: PropTypes.func.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
  onGetSearch: PropTypes.func.isRequired,
  AllowDrop: PropTypes.func.isRequired,
  Drop: PropTypes.func.isRequired,
  Drag: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  depart: PropTypes.string.isRequired,
  return: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  places: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  found: PropTypes.bool.isRequired,
  test: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  prices: PropTypes.number.isRequired,
  showModal: PropTypes.bool.isRequired,
  time: PropTypes.object.isRequired,
  timess: PropTypes.object.isRequired,
  wayla: PropTypes.object.isRequired,
  temp: PropTypes.object.isRequired
}

export default StepHotel
