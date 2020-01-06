import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Addstudent from './components/addstudent';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Addstudent}></Route>
			</Switch>
		</Router>
		// <div>Hello</div>
	);
}

export default App;
