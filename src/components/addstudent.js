import React, { Component } from 'react';
import axios from 'axios';

class AddStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uname: '',
			gender: '',
			city: '',
			isChecked: false,
		};
	}
	toggleChange = () => {
		this.setState({
			isChecked: !this.state.isChecked,
		});
	};

	submitHandler = e => {
		e.preventDefault();
		const postData = {
			uname: this.state.uname,
			gender: this.state.gender,
			city: this.state.city,
			isChecked: this.state.isChecked,
		};
		if (this.state.name === '' || this.state.city === '' || this.state.isChecked === false) {
			alert('Please fill all the data before submitting!!');
		} else {
			alert('Data added successfully!!');

			axios.post('http://localhost:3000/student', postData).then(res => {
				console.log(res);
				if (res.status === 201) {
					axios
						.get('http://localhost:3000/student/')
						.then(resp => console.log(resp))
						.catch(error => console.log(error));
				}
			});
			this.props.history.push('/');
		}
	};

	render() {
		const btnStyles = {
			display: 'flex',
			flexDirection: 'row',
			marginBottom: '10px',
		};
		const styleContainer = {
			border: '1px solid #cecece',
		};
		return (
			<div className="container mt-5" style={styleContainer}>
				<div className="d-flex justify-content-center">
					<h3>Add Student</h3>
				</div>
				<form>
					<div className="form-group col-md-6 ">
						<label> Name:</label>
						<input
							className="form-control"
							type="text"
							placeholder="Enter Name"
							value={this.state.uname}
							onChange={e => {
								this.setState({ uname: e.target.value });
							}}
						/>
					</div>
					<div className="form-check form-check-inline">
						<label> Gender:&nbsp;</label>
						<input
							className="form-check-input"
							type="radio"
							name="gender"
							value="Male"
							onChange={e => {
								this.setState({ gender: e.target.value });
							}}
						></input>
						<label className="form-check-label">Male</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="gender"
							value="Female"
							onChange={e => {
								this.setState({ gender: e.target.value });
							}}
						></input>
						<label className="form-check-label">Female</label>
					</div>

					<div className="form-group col-md-6">
						<label> City:</label>
						<input
							className="form-control"
							type="text"
							placeholder="Enter City"
							value={this.state.city}
							onChange={e => {
								this.setState({ city: e.target.value });
							}}
						></input>
					</div>
					<div className="form-check form-check-inline">
						<input
							type="checkbox"
							className="form-check-input"
							checked={this.state.isChecked}
							onChange={this.toggleChange}
						></input>
						<span>I agree with terms and conditions</span>
					</div>
					<div style={btnStyles}>
						<button className="btn btn-primary" onClick={this.submitHandler}>
							Submit
						</button>
						&nbsp;&nbsp;&nbsp;
						<button className="btn btn-primary" onClick={this.clearForm}>
							Clear
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddStudent;
