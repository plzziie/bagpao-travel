import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/step.css'

function StepThree (props) {
  console.log(props);
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

          <div className="stepthree_day">dddd
            <div className="planbox">
              <div className="circle"></div>
            </div>
          </div>

        <div className="stepthree_select"><div className="where">Where you want to go?</div>

          <ul className = "nav nav-pills nav-justified ">
            <li className = "active"><a href="#place" data-toggle = "tab">Place</a></li>
            <li><a href="#restaurant" data-toggle = "tab">Restaurant</a></li>
            <li><a href="#accommodation" data-toggle = "tab">Accommodation</a></li>
          </ul>

          <div className = "tab-content">
      <div id = "place" className = "tab-pane fade in active">

              <div className="row between">
                <div className="col-md-9 col-xs-8" onChange = {props.onUpdateSearch}>
                <input type = "text"  className = "form-control " placeholder = "search"/>
                </div>
                <div className="col-md-3 col-xs-4">
                <button type = "submit" className = "buttonplan form-control">search</button>
                </div>
              </div>
              {props.fromsearch === null ? <div className="dragbox"><div className="col-md-3">
                <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
              </div>
              : console.log(props.fromsearch)}


            </div>

      <div id = "restaurant" className = "tab-pane fade">

              <div className="row between">
                <div className="col-md-9 col-xs-8">
                <input type = "text"  className = "form-control " placeholder = "search"/>
                </div>
                <div className="col-md-3 col-xs-4">
                <button type = "submit" className = "buttonplan form-control">search</button>
                </div>
              </div>
              <div className="dragbox"><div className="col-md-3">
                <img className = "img-circle" src = "app/img/chiangmai.jpg" alt = "doisuthep"  width="50" height="50"/></div>
                <div className="col-md-8"><h5>Doi Suthep-Pui National Park</h5> <h6>Chiangmai</h6></div>
              </div>
              <div className="dragbox"><div className="col-md-3">
                <img className = "img-circle" src = "app/img/samui.jpg" alt = "samui"  width="50" height="50"/></div>
                <div className="col-md-8"><h5>Samui Island</h5> <h6>Surat Thani</h6></div>
              </div>
            </div>

      <div id = "accommodation" className = "tab-pane fade">

              <div className="row between">
                <div className="col-md-9 col-xs-8">
                <input type = "text"  className = "form-control " placeholder = "search"/>
                </div>
                <div className="col-md-3 col-xs-4">
                <button type = "submit" className = "buttonplan form-control">search</button>
                </div>
              </div>
              <div className="dragbox"><div className="col-md-3">
                <img className = "img-circle" src = "app/img/samui.jpg" alt = "samui"  width="50" height="50"/></div>
                <div className="col-md-8"><h5>Samui Island</h5> <h6>Surat Thani</h6></div>
              </div>
              <div className="dragbox"><div className="col-md-3">
                <img className = "img-circle" src = "app/img/samui.jpg" alt = "samui"  width="50" height="50"/></div>
                <div className="col-md-8"><h5>Samui Island</h5> <h6>Surat Thani</h6></div>
              </div>

            </div>


          </div>

          </div>


        </div>
        </div>

    )
}

StepThree.PropTypes = {

  onUpdateSearch: PropTypes.func.isRequired,
  fromsearch: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired

}

export default StepThree
