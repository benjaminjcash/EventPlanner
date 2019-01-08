import React, { Component } from 'react';	
import Event from '../../components/Event/Event.js';
import axios from 'axios';
import "./Home.css";

class Home extends Component {
	state = {
		data: []
	}

	componentDidMount() {
		axios.get('/api/events')
			.then((data) => {
				let newArr = data.data;
				this.setState({
					data: newArr
				});
			});
	}
	
	render() {
		return (
			<div>
				{
					this.state.data.map(function(eventData) {
						return	<Event title = {eventData.title} />
					})
				}
			</div>
		)
	}
}

export default Home