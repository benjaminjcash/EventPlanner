import React, { Component } from 'react';
import axios from 'axios';
import './CreateEvent.css';

class CreateEvent extends Component {
	state = {
		title: "",
		creator: "",
		description: ""
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({[name] : value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		axios.post("/api/events", this.state)
			.then((res) => {
				console.log(res);
			})
	}

	render() {
		return (
			<form id="form">
				<label className="form-item">
					Title
					<br/>
					<input type="text" name="title" value={this.state.value} onChange={this.handleInputChange} />
					<br/>
				</label>
				<label className="form-item">
					Creator
					<br/>
					<input type="text" name="creator" value={this.state.value} onChange={this.handleInputChange} />
					<br/>
				</label>
				<label className="form-item">
					Description
					<br/>
					<textarea rows="6" cols="50" type="text" name="description" value={this.state.value} onChange={this.handleInputChange} />
					<br/>
				</label>
				<button className="form-item" id="submit-btn" onClick={this.handleSubmit}>Submit</button>
			</form>
		);
	}
}

export default CreateEvent;
