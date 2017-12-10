import React, { Component } from 'react';
import './Todo_Component.css';


export default class TodoAppComponent extends Component{
	constructor(props){
		super(props);

		this.state = {
			items: []
		}

		this.addTodoItem = this.addTodoItem.bind(this);
		this.closeTodoItem = this.closeTodoItem.bind(this);
		this.deleteTodoItem = this.deleteTodoItem.bind(this);
	}

	addTodoItem(event){
		if(event.keyCode===13){  /* handling enter */
			let item_data = event.target.value;
			if(item_data.length ===0)
				return;
        	event.currentTarget.value = "";
			this.state.items.push({
				content: item_data, 
				active: true,
				identifier: Math.random()
			});
			this.setState({
				items: this.state.items
			});
		}
		if (event.target.value === 'Add'){ /* handling button click */
			let item_data = document.getElementsByClassName('TodoInput')[0].value;
			if(item_data.length ===0)
				return;
			document.getElementsByClassName('TodoInput')[0].value = "";
			this.state.items.push({
				content: item_data, 
				active: true,
				identifier: Math.random()
			});
			this.setState({
				items: this.state.items
			});
			document.getElementsByClassName('TodoInput')[0].focus();
		}
	}

	closeTodoItem(event){
		let item_id = parseFloat(event.target.getAttribute("data-content-id"));
		let state_items = this.state.items;
		for(let i=0; i<state_items.length; i++){
			if(state_items[i].identifier===item_id){
				state_items[i].active=!state_items[i].active;
				break;
			}
		}
		this.setState({
			items: state_items
		})
	}

	deleteTodoItem(event){
		let item_id = parseFloat(event.target.getAttribute("data-content-id"));
		let state_items = this.state.items;
		for(let i=0; i<state_items.length; i++){
			if(state_items[i].identifier===item_id){
				state_items.splice(i, 1);
				break;
			}
		}
		this.setState({
			items: state_items
		});
	}

	render() {
		let state_items = this.state.items;
		let completed_count = 0, incomplete_count = 0;
		
		for(let i=0; i<state_items.length; i++){
			if(state_items[i].active===true)
				incomplete_count += 1;
			else
				completed_count += 1;
		}

		
		function compare_active(a, b) {
			if (a.active === true && b.active===false)
			  return -1;
			if (a.active===false && b.active === true)
			  return 1;
			return 0;
		}

		return (
			<div className="TodoContainer">
				<div className="TodoHeader">
					<input type="text" className="TodoInput" placeholder="What're your todos today?" 
						onKeyUp={this.addTodoItem} />
					<input type="submit" className="TodoSubmit" value="Add" onClick={this.addTodoItem}/>
				</div>
				<div className="TodoItemsContainer">
					{completed_count + incomplete_count > 0 && 

						<h3 className="TotalTodoItemsCSS">
							<span>Completed todos - {completed_count}</span>
							<span>Incomplete todos - {incomplete_count}</span>
						</h3>

					}
					
					{state_items.sort(compare_active).map(
						function(item, index){
							return (
								<TodoItemComponent 
									key={index} 
									content={item.content}
									contentId={item.identifier}
									isChecked={!item.active}
									handler={this.closeTodoItem}
									deleteHandler={this.deleteTodoItem} />
							)
						}.bind(this))
					}

				</div>
			</div>
		);
	}
}


class TodoItemComponent extends Component{
	render() {
		return (
			<div className={this.props.isChecked ? "TodoItemCompletedCSS" : "TodoItemInCompleteCSS"}>
				<input type="checkbox" onChange={this.props.handler}
					 checked={this.props.isChecked} data-content-id={this.props.contentId} />
				<span className="TodoItemContent">{this.props.content}</span>
				<input type="submit" className="button delete" value="Delete"
					 data-content-id={this.props.contentId} onClick={this.props.deleteHandler} />
			</div>
		);
	}
}
