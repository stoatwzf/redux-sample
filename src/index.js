import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const decorators = cl => {
	return connect(mapStateToProps, mapDispatchToProps)(cl)
}
// component
@decorators
class Counter extends Component {
	render (){
		const { value, onIncreaseClick } = this.props;

		return (
			<div>
				<span>{value}</span>
				<button onClick={onIncreaseClick}>Increase</button>
			</div>
		);
	}
}

/*redux store*/
const reducer = (state = { count: 0}, action) => {
	const count = state.count;

	switch (action.type){
		case 'increase':
			return { count: count + 1 };
			break;
		default:
			return state;
	}
}
const store = createStore(reducer);

/*connect component*/
const increaseAction = { type: 'increase' }
const mapDispatchToProps = dispatch => ({ onIncreaseClick: () => dispatch(increaseAction)});
const mapStateToProps = state => ({ value: state.count });

ReactDOM.render(
	<Provider store={store}>
		<Counter />
	</Provider>,
	document.querySelector('#root')
);