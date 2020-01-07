import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddStudent from './components/addstudent';
import StudentList from './components/studentList';

function App() {
	return (
		<Router>
			<div className="container">
				<StudentList />
			</div>
			<Switch>
				<Route exact path="/add" component={AddStudent}></Route>
			</Switch>
		</Router>
	);
}

export default App;
