import React, {Component} from 'react'
import styles from '../styles/createplan.css'

class CreatePlan extends Component {
  render() {
    return (
      <div className = "container container_con col-md-9 col-md-offset-1" >
        <div className="row">
        <div className = "col-xs-3 " >
          <label for="origin" className="label">From</label>
            <input type = "text" id="origin" className = "form-control" placeholder = "Enter your origin"/>
        </div>
        <div className = "col-xs-3" >
          <label for="destination" className="label">To</label>
            <input type = "text" id="destination" className = "form-control" placeholder = "Enter your destination"/>
        </div>
        <div className = "col-xs-3">
          <label for="howlong" className="label">Days</label>
            <select style = {styles.left} type = "submit" id="howlong" className = "btn btn-default">
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

      <div className="col-xs-3 col-sm-3">
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
