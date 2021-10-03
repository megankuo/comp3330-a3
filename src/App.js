import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import List from './components/List';
import {Provider} from 'react-redux';
import store from './store';

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className="App-link">
					<h1>Assignment 3</h1>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/courses">List of Courses</Link>
							</li>
						</ul>
					</nav>
				</div>
				<Switch>
					<Route path="/" exact={true} component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/courses" component={List}></Route>
				</Switch>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
