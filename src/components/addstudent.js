import React, { Component } from 'react';

class AddStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
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

	validation = () => {
		if (this.state.name === '' || this.state.city === '' || this.state.isChecked === false) {
			alert('error');
		} else {
			alert('Success');
		}
	};

	render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-between">
					<h4>Add Student</h4>
				</div>
				<form>
					<label> Name:</label>
					<input
						type="text"
						placeholder="Enter Name"
						value={this.state.name}
						onChange={e => {
							this.setState({ name: e.target.value });
						}}
					></input>
					<label> Gender:</label>
					<input
						type="radio"
						name="gender"
						defaultChecked
						value="Male"
						onChange={e => {
							this.setState({ gender: e.target.value });
						}}
					></input>
					Male
					<input
						type="radio"
						name="gender"
						value="Female"
						onChange={e => {
							this.setState({ gender: e.target.value });
						}}
					></input>
					Female
					<label> City:</label>
					<input
						type="text"
						placeholder="Enter City"
						value={this.state.city}
						onChange={e => {
							this.setState({ city: e.target.value });
						}}
					></input>
					<input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}></input>
					<span>I agree with terms and conditions</span>
					<button onClick={this.validation}>Submit</button>
					<button onClick={this.clearForm}>Clear</button>
				</form>
				Hello
			</div>
		);
	}
}

export default AddStudent;
// import React, { Component } from 'react';
// class Demo extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return <div>Hello</div>;
// 	}
// }
// export default Demo;
