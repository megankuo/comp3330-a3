import * as actions from './actionTypes';

export function selectCourse(code) {
	return {
		type: actions.SELECT_COURSE,
		payload: {
			code,
		},
	};
}

