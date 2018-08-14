import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import logger from 'redux-logger';

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  applyMiddleware(logger)
);

class App extends Component {
	state = {
		value: 0
	}

	componentDidMount (){
		this.unSubscribe = store.subscribe(() => {
			this.setState({
				value: (+store.getState().foo) + (+store.getState().bar) + (+store.getState().baz)
			})
		});
	}

	componentWillUnmonunt (){
		this.unSubscribe();
	}

	changeHandler = event => {
		const {name, value} = event.target;

		store.dispatch({
			type: `TODO_${name}`,
			payload: {
				[name]: value
			}
		})
	}

	render (){
		return (
			<div>
				<label>foo: </label>
				<input name="foo" value={this.state.foo} onChange={this.changeHandler} />
				<br />
				<label>bar: </label>
				<input name="bar" value={this.state.bar} onChange={this.changeHandler} />
				<br />
				<label>baz: </label>
				<input name="baz" value={this.state.baz} onChange={this.changeHandler} />
				<br />
				<label>Total: </label>
				<input value={this.state.value} />
				<br />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);