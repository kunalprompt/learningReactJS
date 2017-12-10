import React, { Component } from 'react';
import logo from './todo_pencil_icon_48.png';
import './App.css';
import TodoAppComponent from './Todo_Component.js'


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>todos</h1>
				</header>
				<TodoAppComponent />
				<div className="TodoFooterContainerCSS">
					<div className="TodoFooterWrapperCSS">
						Designed and developed by <a 
							href="https://www.linkedin.com/in/kunalprompt/">Kunal Sharma</a>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
