import {Route, Link} from 'react-router-dom';
import Course from './Course';
import React from 'react';
import {connect} from 'react-redux';
import db from '../db';

// function mapStateToProps(state, ownProps) {
// 	const {code, name, description} = state;
// 	return {code, name, description};
// }

// // export default connect(MapStateToProps)(db);
// connect(mapStateToProps(db));
// let thing = connect(mapStateToProps(db));

const List = () => {
	return (
		<div className="App">
			<h1>List of Courses</h1>

			<ul>
				<li>
					<Link to="/courses/comp3330">COMP 3330</Link>
				</li>
				<li>
					<Link to="/courses/comp3514">COMP 3514</Link>
				</li>
				<li>
					<Link to="/courses/idsp3380">IDSP 3380</Link>
				</li>
				<li>
					<Link to="/courses/mktg1352">MKTG 1352</Link>
				</li>
				<li>
					<Link to="/courses/mdia2106">MDIA 2106</Link>
				</li>
				<li>
					<Link to="/courses/busa3455">BUSA 3455</Link>
				</li>
				<li>
					<Link to="/courses/blaw3205">BLAW 3205</Link>
				</li>
			</ul>
			<Route path="/courses/:courseCode" component={Course} />
			{/* <Route path="/courses/:courseCode">
        <Course />
			</Route> */}
		</div>
	);
};
export default List;
