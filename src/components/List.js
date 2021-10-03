import { Route, Link } from "react-router-dom";
import Course from "./Course";
import React from 'react';
import { useDispatch } from "react-redux";

const List = () => {
	return (
		<div className="App">
			<h1>List of Courses</h1>
			<ul>
				<li>
					<Link to="/courses/comp3330">COMP 3330: Javascript frameworks and server</Link>
				</li>
				<li>
					<Link to="/courses/comp3514">COMP 3514: Web C# Application Development</Link>
				</li>
				<li>
					<Link to="/courses/idsp3380">IDSP 3380: Web Projects 2</Link>
				</li>
			</ul>
			<Route path="/courses/:courseCode" component={Course} testcontent= "words" />
		</div>
	);
};
export default List;
