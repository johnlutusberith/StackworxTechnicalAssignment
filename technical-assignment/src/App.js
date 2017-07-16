import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

var App = React.createClass( {
	
	
	
  render: function(){
    return (
	
	<div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Make a list of task (:
        </p>
	  </div>
		<TodoList/>
	</div>
		
      
    );
  }
});

var ToggleButton = React.createClass({
	getInitialState: function() {
    return {
      taskCompleted : false
    }
  }
		
	,
	handleStateChange: function()
  {
	this.setState({taskCompleted : !this.state.taskCompleted});
  },
  
  render : function()
  {
	  return(
		<button className="btn" onClick={this.handleStateChange}>{this.state.taskCompleted ? "Completed" : "Not Completed"}</button>
	  );
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      tasks: []
    };
  },
  addTask: function(x) {
     
	 
	var taskArr = this.state.tasks;
   
  taskArr.push(
    {
      text: this.taskText.value,
      
    }
  );
 
  this.setState({
    tasks: taskArr
  });
 
  this.taskText.value = "";
 
  x.preventDefault();
  },
  render: function() {
    return (
      <div className="mainList">
        <div className="header">
          <form onSubmit={this.addTask}>
            <input ref={(a) => this.taskText = a}
                   placeholder="Enter Task ...">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
		<Task text={this.state.tasks}/>
      </div>
    );
  }
});
var Task = React.createClass({
	
	
   createTask: function(props) {

      return <div > <ToggleButton/>
		<div>
		{props.text}	
		</div>
	  </div>
    },
  render: function() {
    var todoTask = this.props.text; 
    var items = todoTask.map(this.createTask);
	return (
      <div className="theList">
        {items}
		
      </div>
    );
  }
});

export default App;
