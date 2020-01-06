import React from 'react';
import StudentList from './components/studentList';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="container mt-5">
				<div className="card">
					<StudentList />
				</div>
			</div>
		</div>
	);
}

export default App;
