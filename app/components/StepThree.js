import React, {Component} from 'react'
import {PropTypes} from 'react'
import ReactDOM, {findDOMNode} from 'react-dom';
import styles from '../styles'
import style from '../styles/step.css'

function StepThree (props) {
  console.log(props)

  var tmp = [];
  for (var i = 0; i < props.daytrip; i++) {
    tmp.push(i);
  }

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

        <div className="container">
          <div className="stepthree_day">
            <div className="row scrollmenu">
            {tmp.map((val, index) => {
              return <div key = {index} className="day" id ={index+1}>
                <div className="inday">Day {val+1}</div>
                <div className="planbox" id = {index+1} onDrop = {props.Drop} onDragOver = {props.AllowDrop} ></div>
                </div>})}
          </div>
        </div>


        <div className="stepthree_select">
          <div className="where">Where you want to go?</div>
              <ul className = "nav nav-pills nav-justified ">
                <li><a href="#search" data-toggle = "tab">Search</a></li>
                <li className = "active"><a href="#place" data-toggle = "tab">Place</a></li>
                <li><a href="#restaurant" data-toggle = "tab">Restaurant</a></li>
                <li><a href="#accommodation" data-toggle = "tab">Accommodation</a></li>
              </ul>

                <div className = "tab-content">
                  <div id = "place" className = "tab-pane fade in active">
                    <div className="planboxright" onDrop = {props.Drop} onDragOver = {props.AllowDrop}>
                      {props.places.map((val, index) => {
                          return (val.category != "restaurant")
                            ? (val.category != "accommodation")
                              ? <div key = {index} className="dragbox"  draggable = "true" onDragStart = {props.Drag} id = {val.placeid}><div className="col-md-3">
                                <img className = "img-circle" src = {val.picture} alt = {val.name[0]} width="50" height="50"/></div>
                                <div className="col-md-8"><h5>{val.name[0]}</h5> <h6>{val.city[0]}</h6></div>
                                </div>
                              : null
                            : null
                        })}
                    </div>
                  </div>

                  <div id = "restaurant" className = "tab-pane fade">
                    <div className="planboxright" onDrop = {props.Drop} onDragOver = {props.AllowDrop}>
                    {props.places.map((val, index) => {
                        return (val.category == "restaurant")
                            ? <div key = {index} className="dragbox"  draggable = "true" onDragStart = {props.Drag} id = {val.placeid}><div className="col-md-3">
                              <img className = "img-circle" src = {val.picture} alt = {val.name[0]} width="50" height="50"/></div>
                              <div className="col-md-8"><h5>{val.name[0]}</h5> <h6>{val.city[0]}</h6></div>
                              </div>
                            : null
                      })}
                    </div>
                  </div>

                  <div id = "accommodation" className = "tab-pane fade">
                    <div className="planboxright" onDrop = {props.Drop} onDragOver = {props.AllowDrop}>
                    {props.places.map((val, index) => {
                        return (val.category == "accommodation")
                            ? <div key = {index} className="dragbox"  draggable = "true" onDragStart = {props.Drag} id = {val.placeid}><div className="col-md-3">
                              <img className = "img-circle" src = {val.picture} alt = {val.name[0]} width="50" height="50"/></div>
                              <div className="col-md-8"><h5>{val.name[0]}</h5> <h6>{val.city[0]}</h6></div>
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
                    <div className="planboxright" onDrop = {props.Drop} onDragOver = {props.AllowDrop}>
                      {props.found
                        ? props.place.map((val, index) => {
                          return <div key = {index} className="dragbox"  draggable = "true" onDragStart = {props.Drag} id = {val.placeid}><div className="col-md-3">
                                <img className = "img-circle" src = {val.picture} alt = {val.name[0]} width="50" height="50"/></div>
                                <div className="col-md-8"><h5>{val.name[0]}</h5> <h6>{val.city[0]}</h6></div>
                                </div>
                              })
                        : <h5>Cannot found this place</h5> }
                    </div>
                  </div>

                </div>
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

StepThree.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
  onGetSearch: PropTypes.func.isRequired,
  AllowDrop: PropTypes.func.isRequired,
  Drop: PropTypes.func.isRequired,
  Drag: PropTypes.func.isRequired,
  depart: PropTypes.string.isRequired,
  return: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  places: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  found: PropTypes.bool.isRequired,
  test: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired
}

export default StepThree
