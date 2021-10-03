import { connect } from 'react-redux';
import db from './db';

function MapStateToProps(state, ownProps) {
	const {courses} = state;
	return {courseList: courses.allIds};
}

export default connect(MapStateToProps)(db);