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
	// console.log(course);
	// console.log(store.getState());
	console.log(props);
	return (
		<div>
			<h1>
				{courseCode} - {props.name}
				{/* {props.name} */}
				{/* {course} */}
				{/* {code}: */}
				{/* {name} */}
			</h1>

			{props.description}
		</div>
	);
};

function mapStateToProps(state, ownProps) {
	const {courses, selectedCourse} = state;
	let courseInfo = courses.filter((course) => course.code === selectedCourse)[0];
	return courseInfo;
}

// connect(mapStateToProps(db));
// let thing = connect(mapStateToProps(db));

export default connect(mapStateToProps)(Course);
// export default Course;
