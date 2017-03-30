import React, {Component} from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

function StepThree (props) {
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
        <div className="container">

          <div className="stepthree_day">
            <div className="row scrollmenu">
              <div className="planbox">
                   <div className="day">Day 1</div>
                   <div className="dragbox"><div className="col-md-3">
                     <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                     <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
                   </div>
              </div>
              <div className="planbox">
                   <div className="day">Day 2</div>
                   <div className="dragbox"><div className="col-md-3">
                     <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                     <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
                   </div>
              </div>
              <div className="planbox">
                   <div className="day">Day 3</div>
                   <div className="dragbox"><div className="col-md-3">
                     <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                     <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
                   </div>
              </div>
            </div>

          </div>

        <div className="stepthree_select">
          <div className="where">Where you want to go?</div>

          <ul className = "nav nav-pills nav-justified ">
            <li className = "active"><a href="#place" data-toggle = "tab">Place</a></li>
            <li><a href="#restaurant" data-toggle = "tab">Restaurant</a></li>
            <li><a href="#accommodation" data-toggle = "tab">Accommodation</a></li>
          </ul>


          <div className = "tab-content">
            <div id = "place" className = "tab-pane fade in active">


              <div className="between">
                <div className="form">
                <input type = "text"  className = "form-control " placeholder = "search"/>
                </div>
                <div className="col-md-3 col-xs-4">
                <button type = "submit" className = "buttonplan form-control">search</button>
                </div>
              </div>

                <ul className="searchbox">
                  <li className="dragbox">
                    <div className="col-md-3"><img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"
                    width="50" height="50"/></div><div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
                  </li>
                  <li className="dragbox">
                    <div className="col-md-3"><img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"
                    width="50" height="50"/></div><div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
                  </li>
                </ul>
            </div>


      <div id = "restaurant" className = "tab-pane fade">
        <div className="between">
          <div className="form">
          <input type = "text"  className = "form-control " placeholder = "search"/>
          </div>
          <div className="col-md-3 col-xs-4">
          <button type = "submit" className = "buttonplan form-control">search</button>
          </div>
        </div>

          <ul className="searchbox">
            <li className="dragbox">
              <div className="col-md-3"><img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"
              width="50" height="50"/></div><div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
            </li>
            <li className="dragbox">
              <div className="col-md-3"><img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"
              width="50" height="50"/></div><div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
            </li>
          </ul>

            </div>

      <div id = "accommodation" className = "tab-pane fade">

        <div className="between">
          <div className="form">
          <input type = "text"  className = "form-control " placeholder = "search"/>
          </div>
          <div className="col-md-3 col-xs-4">
          <button type = "submit" className = "buttonplan form-control">search</button>
          </div>
        </div>

          <ul className="searchbox">
            <li className="dragbox">
              <div className="col-md-3"><img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"
              width="50" height="50"/></div><div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
            </li>
            <li className="dragbox">
              <div className="col-md-3"><img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"
              width="50" height="50"/></div><div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
            </li>
          </ul>
            </div>


          </div>

          </div>

          <div className="col-md-offset-4 col-sm-offset-4 col-xs-offset-4 col-md-4 col-sm-4 col-xs-4 step-bottom " >
              <button  type = "submit" className = "button form-control">
                 Next
              </button></div>


        </div>
        </div>

    )
}

StepThree.PropTypes = {
  onSubmitTrip: PropTypes.func.isRequired,
  onUpdateDeparture: PropTypes.func.isRequired,
  onUpdateReturn: PropTypes.func.isRequired,
  depart: PropTypes.string.isRequired,
  arrive: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  daytrip: PropTypes.string.isRequired,
  vehicles: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default StepThree
