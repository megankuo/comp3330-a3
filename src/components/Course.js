import store from '../store';
import {useParams} from 'react-router-dom';
import {selectCourse} from '../actions';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import db from '../db';

const Course = (props) => {
	let {courseCode} = useParams();

	const course = store.dispatch(selectCourse(courseCode));
	// const {code, name, description} = store.getState();
	// const code = useSelector(state => state);
	console.log(course);
	console.log(store.getState());
	return (
		<div>
			<h1>
				{courseCode}
				{props.name}
				{/* {props.description} */}
				{/* {props.name} */}
				{/* {course} */}
				{/* {code}: */}
				{/* {name} */}
			</h1>

			{/* <p>{description}</p> */}
		</div>
	);
};

function mapStateToProps(state, ownProps) {
	const {code, name, description} = state;
	return {code, name, description};
}

// connect(mapStateToProps(db));
let thing = connect(mapStateToProps(db));

export default connect(mapStateToProps)(db);
// export default Course;
