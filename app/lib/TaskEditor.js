"use strict";
var React = require("react");
import '../styles/taskeditor.css'
var ENTER = 13;

var TaskEditor = React.createClass({

	getInitialState: function() {
		return {
			name: ""
		};
	},

	addTask: function(e) {
		if(e.keyCode == ENTER) {
			if (this.props.addTask) {
				this.props.addTask(e.target.value);
				e.target.value = "";
			}
		}
	},

	render: function() {
		return (<div className = "add-task">
					<input  type = "text" placeholder="Where do you want to go?"
							onKeyDown = {this.addTask}/>
				</div>);
	}
});

module.exports = TaskEditor;
