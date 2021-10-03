import store from '../store';
import {useParams} from 'react-router-dom';
import {selectCourse} from '../actions';
import {Provider, useSelector} from 'react-redux';

const Course = () => {
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
				{/* {course} */}
				{/* {code}: */}
				{/* {name} */}
			</h1>
			{/* <p>{description}</p> */}
		</div>
	);
};
export default Course;
