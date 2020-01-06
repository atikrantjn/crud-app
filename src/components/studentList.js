import React, { Component } from 'react';

class StudentList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const styles = {
			marginTop: '10px',
		};
		return (
			<div className="container">
				<div className="d-flex justify-content-between">
					<h4 style={styles}>Student Dashboard</h4>
					<a href="#" className="btn btn-outline-primary btn-sm mb-3 mt-3">
						Add Student
					</a>
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
						<tr>
							<td>01</td>
							<td>atikrant</td>
							<td>Male</td>
							<td>khandwa</td>
							<td></td>
						</tr>
						<tr>
							<td>02</td>
							<td>abcdef</td>
							<td>Female</td>
							<td>pune</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default StudentList;
