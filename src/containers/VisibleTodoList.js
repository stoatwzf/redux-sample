import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
	switch (filter){
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
};
const mapStateToProps = ({ todos, visibilityFilter }) => ({
	todos: getVisibleTodos(todos, visibilityFilter)
});
const mapDispatchToProps = dispatch => ({
	onTodoClick: id => {
		console.log(toggleTodo(id));
		dispatch(toggleTodo(id))
	}
});
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;