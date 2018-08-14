export const foo = (state, action) => {

	if (state !== undefined){
		if (action.type === 'TODO_foo'){
			return action.payload.foo;
		} else {
			return state
		}
	} else {
		return 0
	}
	
}


export const bar = (state, action) => {
	if (state !== undefined){
		if (action.type === 'TODO_bar'){
			return action.payload.bar;
		} else {
			return state
		}
	} else {
		return 0
	}
}

export const baz = (state, action) => {
	if (state !== undefined){
		if (action.type === 'TODO_baz'){
			return action.payload.baz;
		} else {
			return state
		}
	} else {
		return 0
	}
}