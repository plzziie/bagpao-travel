import React, {Component,PropTypes} from 'react'
import ReactRouter, {browserHistory} from 'react-router'
import style from '../styles/detail.css'
import styles from '../styles'
import styl from '../styles/stepfour.css'
import styless from '../styles/step.css'
import stylesss from '../styles/trips.css'
import stylesssss from '../styles/places.css'


function TripDetail (props) {
console.log(props);

var tmp = [];
  for (var i = 0; i < props.daytrip; i++) {
    tmp.push(i);
  }

  return(
    <div className="container-fluid step-bottom">
      <div className="container">

        {props.show.map((val, index) => {
          return <div key = {index}><div className = "text-center"><div className = "detail_header">{val.name.toUpperCase()}</div>
                 <img className = "img " src={val.picture} alt = {val.name}  width = "376" height = "251"/></div>
                 <div className = "contentdetail col-md-offset-3 col-md-6">
                   <form>
                     <fieldset>
                       <p><b>Creator :</b> {val.creator}</p>
                       <p><b>Date :</b> {val.datesubmit}</p>
                       <p><b>From :</b> {val.origin}  <b>To :</b> {val.destination}</p>
                       <p><b>Like :</b> {val.like}</p>
                     </fieldset>
                   </form>
               </div></div>
         })}


         <div className = "jumbotron col-md-10  col-md-offset-1 text-center" style = {styles.transparentBg}>
           <ul className = "nav nav-tabs nav-justified step-bottom">
              <li className = "active"><a data-toggle = "tab" href = "#details"><h3>Details</h3></a></li>
              <li><a data-toggle = "tab" href = "#reviews"><h3>Reviews</h3></a></li>
          </ul>
              <div className = "tab-content">
                  <div id = "details" className = "tab-pane fade in active">
                        <div className=" stepthree_daysum" style = {styles.gapp}>
                        <div className="row scrollmenu">
                         {tmp.map((val, index) => {
                            return <div key = {index} className="day">
                                <div className="inday">Day {val+1}</div>
                                <div className="planbox">
                                 {props.show.map((vals, indexs) => {
                                    return <div key= {indexs}>
                                    {vals.place.map((j, indexj) => {
                                        return (j.days == index+1) ?
                                          <div key = {indexj} className="dragboxx"><div className="col-md-3">
                                          <img className = "img-circle" src = {j.picture} alt = {j.name[0]} width="50" height="50"/></div>
                                          <div className="col-md-8"><h5>{j.name[0]}</h5> <h6>{j.city[0]}</h6></div>
                                          </div>
                                          : null
                                        })}
                                      </div>
                                    })}
                         </div>
                        </div>
                      })}

                </div>
                </div>
              </div>

              <div id = "reviews" className = "tab-pane fade">
              <center>
                <div className="review-size">
                  <div className="container">
                    { props.showw.map((vals, index) => {
                        return <div  key = {index} className="container commentbox">
                        <div className="col-md-1 col-sm-1 imggap"><img src = {vals.picture} alt = {vals.name}  width="40" height="40"/></div>
                        &nbsp;<div className="username col-md-10 col-sm-10"><b>{vals.user}</b></div>
                        <div className="comment col-md-11 col-sm-10">{vals.comment}</div>
                      </div>

                   })}

                  <ul className = "breadcrumb" style = {styles.space}>
                    <li className = "active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
                <form onSubmit = {props.onUpdateComment}>
                <div className = "form-group">
                          <textarea
                            className = 'form-control'
                            placeholder = 'Write your comment'
                            rows = '5'
                            type='text'
                            onChange = {props.onUpdateReview}
                           />
                    </div>
                    <div className = "form-group col-xs-4 col-xs-offset-4">
                          <button  className = "btn btn-block btn-success" type = "submit">
                              Send  </button>
                    </div>
                    </form>
                  </div>
                </div>
              </center>
              </div>
          </div>
         </div>



       </div>
         <div className="col-md-offset-5 buttongap" style = {styles.gapp}>
           <button className="btn btn-success col-md-4" onClick = {browserHistory.goBack}>Back</button>
         </div>
    </div>
    )
  }

  TripDetail.PropTypes = {
  show: PropTypes.object.isRequired,
  daytrip: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  onUpdateReview: PropTypes.func.isRequired,
  onUpdateComment: PropTypes.func.isRequired,
  showw: PropTypes.object.isRequired
  }

export default TripDetail
