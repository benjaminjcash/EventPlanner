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
				this.setState({
					data: newArr
				});
			});
	}

	deleteEvent = (id) => {
		console.log("id: " + id);
		axios.delete(`/api/events/${id}`)
			.then((res) => {
				this.fetchEvents();
			})

	}
	
	render() {
		return (
			<div>
				{
					this.state.data.map((eventData) => {
						return	<Event data={eventData} handleDelete={this.deleteEvent} />
					})
				}
			</div>
		)
	}
}

export default Home