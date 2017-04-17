import React, {Component} from 'react'
import ReactRouter from 'react-router'
import style from '../styles/detail.css'
import styles from '../styles'



function Details (props) {
  return(
    <div>
      <div className="row scrollmenu">
        <div className="planboxx">
             <div className="day">Day 1</div>
             <div className="dragboxx"><div className="col-md-3">
               <img className = "img-circle" src = "app/img/places/000008.jpg" alt = "doisuthep"  width="50" height="50"/></div>
               <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
             </div>
        </div>
        <div className="planboxx">
             <div className="day">Day 2</div>
             <div className="dragboxx"><div className="col-md-3">
               <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
               <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
             </div>
        </div>
        <div className="planboxx">
             <div className="day">Day 3</div>
             <div className="dragboxx"><div className="col-md-3">
               <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
               <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
             </div>
        </div>
      </div>
    </div>
   )
 }

export default Details
