import store from '../store';
import {useParams} from 'react-router-dom';
import {selectCourse} from '../actions';
import React from 'react';
import {connect} from 'react-redux';


const Course = (props) => {
	let {courseCode} = useParams();

	store.dispatch(selectCourse(courseCode));

	console.log(props);
	return (
		<div>
			<h1>
				{courseCode.toUpperCase()} - {props.name}

			</h1>

			{props.description}
		</div>
	);
};

function mapStateToProps(state) {
	const {courses, selectedCourse} = state;
	let courseInfo = courses.filter((course) => course.code === selectedCourse)[0];
	return courseInfo;
}


export default connect(mapStateToProps)(Course);
// export default Course;
