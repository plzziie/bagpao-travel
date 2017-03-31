"use strict";
var React = require("react");
var Task = require("./task.js");
var TaskEditor = require("./taskeditor.js");

import '../styles/todolist.css'

var ToDoList = React.createClass({

	getInitialState: function() {
		return {
			tasks: []
		};
	},

	addTask: function(taskText) {
		var tasks = this.state.tasks;
		tasks.push(<Task name = {taskText} isActive = {true}/>);
		this.forceUpdate();
	},

	render: function() {
		return (<div className="todo-list">
					{this.state.tasks}
					<TaskEditor addTask = {this.addTask}/>
				</div>);
	}
});

module.exports = ToDoList;
