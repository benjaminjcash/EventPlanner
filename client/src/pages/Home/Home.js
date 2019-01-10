import React, { Component } from 'react';	
import Event from '../../components/Event/Event.js';
import axios from 'axios';
import "./Home.css";

class Home extends Component {
	state = {
		data: []
	}

	componentDidMount() {
		this.fetchEvents();
	}

	fetchEvents = () => {
		axios.get('/api/events')
			.then((data) => {
				let newArr = data.data;
				console.log("New array of items after deletion", newArr);
				this.setState({
					data: newArr
				});
			});
	}

	deleteEvent = (id) => {
		console.log("id of item to be deleted", id);
		axios.delete(`/api/events/${id}`)
			.then((res) => {
				console.log("delete response from server", res);
				this.fetchEvents();
			})

	}
	
	render() {
		return (
			<div id="event-container">
				{
					this.state.data.map((eventData, index) => {
						return	<Event key={index} data={eventData} handleDelete={this.deleteEvent} />
					})
				}
			</div>
		)
	}
}

export default Home