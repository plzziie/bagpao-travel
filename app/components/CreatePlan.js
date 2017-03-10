import React, {Component} from 'react'
import styles from '../styles/createplan.css'

class CreatePlan extends Component {
  render() {
    return (
      <div className = "container container_con col-md-10 col-md-offset-1" >
        <div className="row">
        <div className = "col-md-3 col-sm-6 col-xs-12" >
            <h4 className="fontwhite">From</h4>
            <input type = "text"  className = "form-control" placeholder = "Enter your origin"/>
        </div>
        <div className = "col-md-3 col-sm-6 col-xs-12" >
          <h4 className="fontwhite">To</h4>
            <input type = "text" className = "form-control" placeholder = "Enter your destination"/>
        </div>

        <div className = "col-md-3 col-sm-6 col-xs-6">
          <h4 className="fontwhite">Days</h4>
            <select style = {styles.left} type = "submit" id="howlong" className = "btn btn-default howlong">
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
        <button type="button" className="button form-control">
           Search&nbsp;<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
        </button>

      </div>
      </div>
    </div>
    )
  }
}
export default CreatePlan
