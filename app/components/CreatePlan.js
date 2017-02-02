import React, {Component} from 'react';
import styles from '../styles';

class CreatePlan  extends Component {

  render() {
    return (
<div className="container" style={styles.container}>

  <div className="row">

  <div className="col-md-4 " >
    <h3 style={styles.left}>From</h3>
    <input type="text" className="form-control" placeholder="Enter your origin"
      value=""
      onChange="" />

  </div>

  <div className="col-md-4" >
    <h3 style={styles.left}>To</h3>
    <input type="text" className="form-control" placeholder="Enter your destination"/>
  </div>


    <div className="dropdown col-md-4">
        <h3 style={styles.left}>Days</h3>
        <select style={styles.left} type="button" className="btn btn-default">
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

  </div>

  <button style={styles.gap} type="submit" className="btn btn-default dropdown col-md-6 col-md-offset-3"  >Go</button>
<div>


 </div>
</div>


    );
  }
}
export default CreatePlan
