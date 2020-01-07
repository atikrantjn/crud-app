import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios from 'axios';

class StudentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			student: [],
		};
	}

	componentDidMount() {
		axios.get('http://localhost:3000/student/').then(res => {
			this.setState({ student: res.data });
		});
	}

	deleteStudData = id => {
		const conf = window.prompt('Are you sure you want to delete?? ');
		if (conf) {
			axios.delete('http://localhost:3000/student/' + id).then(res => {
				axios.get('http://localhost:3000/student/').then(res => {
					this.setState({ student: res.data });
				});
			});
		}
	};

	render() {
		const styles = {
			marginTop: '10px',
		};

		return (
			<div className="container">
				<div className="d-flex justify-content-between">
					<h4 style={styles}>Student Dashboard</h4>
					<Link to="/add" className="btn btn-outline-primary btn-sm mb-3 mt-3">
						Add Student
					</Link>
				</div>
				<table className="table table-hover">
					<thead className="thead-dark">
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Gender</th>
							<th>City</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{this.state.student.length > 0
							? this.state.student.map(data => {
									return (
										<tr key={data.id}>
											<td>{data.id}</td>
											<td>{data.uname}</td>
											<td>{data.gender}</td>
											<td>{data.city}</td>
											<td>
												<a href="#">Edit</a>&nbsp;&nbsp;|
												<a href="#" onClick={() => this.deleteStudData(data.id)}>
													Delete
												</a>
											</td>
										</tr>
									);
							  })
							: null}
					</tbody>
				</table>
			</div>
		);
	}
}
export default StudentList;
