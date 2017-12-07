import React, { Component } from 'react';
import './Todo.css';

export default class TodoAppComponent extends Component{
	constructor(props){
		super(props);

		this.state = {
			items: []
		}

		this.addTodoItem = this.addTodoItem.bind(this);
		this.closeTodoItem = this.closeTodoItem.bind(this);
	}

	addTodoItem(event){
		if(event.keyCode===13){  /* handling enter */
			let item_data = event.target.value;
        	event.currentTarget.value = "";
			this.state.items.push({content:item_data, active:true});
			this.setState({
				items: this.state.items
			})
		}
		if (event.target.value === 'Add'){ /* handling button click */
			let item_data = document.getElementsByClassName('TodoInput')[0].value;
			document.getElementsByClassName('TodoInput')[0].value = "";
			this.state.items.push({content:item_data, active:true});
			this.setState({
				items: this.state.items
			})
		}
	}

	closeTodoItem(event){
		let item_idx = parseInt(event.target.getAttribute("data-content-idx"), 10);
		let state_items = this.state.items;
		for(let i=0; i<state_items.length; i++){
			if(i===item_idx){
				state_items[i].active=!state_items[i].active;
				break;
			}
		}
		this.setState({
			items: state_items
		})
	}

	render() {
		let todos_count = this.state.items.length;
		
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
					{todos_count > 0 && 

						<h3 className="TotalTodoItemsCSS">Total Todos - {todos_count}</h3>

					}
					
					{this.state.items.sort(compare_active).map(
						function(item, index){
							return (
								<TodoItemComponent 
									key={index} 
									content={item.content} 
									contentIdx={index}
									isChecked={!item.active}
									handler={this.closeTodoItem} />
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
			<div className={this.props.isChecked ? "TodoItemInCompleteCSS" : "TodoItemCompletedCSS"}>
				<input type="checkbox" onChange={this.props.handler}
					 checked={this.props.isChecked} data-content-idx={this.props.contentIdx} />
				{this.props.content}
			</div>
		);
	}
}
