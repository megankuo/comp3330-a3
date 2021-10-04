import * as actions from './actionTypes';
import db from './db';

const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.SELECT_COURSE:
			// state = db.filter((course) => course.code === action.payload.code);
			let newState = {...state, selectedCourse: action.payload.code};
			return newState;
		default:
			return state;
	}
};

export default reducer;
