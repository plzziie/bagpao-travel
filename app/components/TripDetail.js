import React, {Component,PropTypes} from 'react'
import ReactRouter from 'react-router'
import style from '../styles/detail.css'
import styles from '../styles'

function TripDetail (props) {
console.log(props);
  return(
    <div className="container-fluid">
      <div className="row scrollmenu">
    <div className = "container">
                  <div className = "text-center"><div className = "detail_header">Names</div>
                  <div className = "col-md-offset-2 col-md-2">
                      <img className = "img " src="#" alt = "name" width = "376" height = "251"/></div>
                  </div>
                  <div className="planboxx">
                      <div className="day">Day 1</div>
                        <div className="dragboxx">
                            <div className="col-md-3"><img className = "img-circle" src = "" alt = ""  width="50" height="50"/></div>
                            <div className="col-md-8"><h5>Name</h5> <h6>City</h6></div>
                        </div>
                  </div>
                </div>
       })}

     </div>
       <div className="col-md-offset-5 buttongap">
         <a className="btn btn-success col-md-3" href="/trips" role="button">Back</a>
       </div>
  </div>

   )
 }

export default TripDetail
