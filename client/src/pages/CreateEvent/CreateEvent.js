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
			<form>
				<label>
					Title:
					<input type="text" name="title" value={this.state.value} onChange={this.handleInputChange} />
				</label>
				<label>
					Creator:
					<input type="text" name="creator" value={this.state.value} onChange={this.handleInputChange} />
				</label>
				<label>
					Description:
					<input type="text" name="description" value={this.state.value} onChange={this.handleInputChange} />
				</label>
				<button onClick={this.handleSubmit}>Submit</button>
			</form>
		);
	}
}

export default CreateEvent;
