import React, {Component} from 'react'
import {PropTypes} from 'react'
import ReactDOM, {findDOMNode} from 'react-dom';
import styles from '../styles'

var StepThreeee = React.createClass ({

  allowDrop: function(ev) {
      ev.preventDefault();
  },

  drag: function(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  },

  drop: function (ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
  },

  render: function () {
    return(

      <div className="container-fluid">

      <ul className = "stepone nav nav-pills nav-justified">
        <li><a href = "/stepone">Step 1</a></li>
        <li><a href = "/steptwo">Step 2</a></li>
        <li className="active"><a href = "/stepthree">Step 3</a></li>
        <li><a href = "stepfour">Step 4</a></li>
      </ul>


      <h2>Drag and Drop</h2>
      <p>Drag the image back and forth between the two div elements.</p>

      <div style = {styles.dnd} onDrop = {this.drop} onDragOver = {this.allowDrop}>
        <img src = "./app/img/chiangdao.jpg" draggable = "true" onDragStart = {this.drag} id = "drag1" width = "180" height = "90"/>
      </div>

      <div style = {styles.dnd} onDrop = {this.drop} onDragOver = {this.allowDrop}></div>
    </div>
    )
	}
  });

StepThreeee.PropTypes = {
  onUpdateSearch: PropTypes.func.isRequired,
  onUpdatePlaces: PropTypes.func.isRequired,
  fromsearch: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  places: PropTypes.string.isRequired,
  placess: PropTypes.array.isRequired
}

export default StepThreeee
