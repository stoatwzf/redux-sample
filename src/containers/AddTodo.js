import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

@connect()
class AddTodo extends Component {
	submitHandler = event => {
		event.preventDefault();
		const value = this.input.value.trim();

		if (!value){
			return;
		}
		this.props.dispatch(addTodo(value));
		this.input.value = '';
	}

	render (){
		console.log(this.props)
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<input ref={ele => this.input = ele} />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;