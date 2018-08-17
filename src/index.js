import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import {
  VisibilityFilters,
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} from './actions';

const todoApp = combineReducers(reducers);
const store = createStore(todoApp);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))