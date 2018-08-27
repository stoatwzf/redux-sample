/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const postFn = name => (
	fetch(`http://127.0.0.1:8787`, {
	  method: "POST",
	  body: JSON.stringify({
	  	firstName: 'stoat',
	  	age: 28,
	  	favcolor: 'blue'
	  }),
	  mode: 'cors'
	})
		.then(res => res.json())
)

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */
export const addTodo = name => ({
	type: ADD_TODO,
	payload: postFn(name)
})

/*export const addTodo= name => {
	return dispatch => {
		dispatch({
			type: ADD_TODO,
			stage: 0
		});
		return fetch(`http://127.0.0.1:8787?name=${name}`)
			.then(res => res.json())
			.then(data => data.json)
			.then(json => {
				dispatch({
					type: ADD_TODO,
					stage: 1,
					text: json.text
				});
			});
	}
}*/

export const toggleTodo = id => {
  return { type: TOGGLE_TODO, id }
}

export const setVisibilityFilter = filter => {
  return { type: SET_VISIBILITY_FILTER, filter }
}