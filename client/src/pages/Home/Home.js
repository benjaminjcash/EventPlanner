import React, { Component } from 'react';
import Event from '../../components/Event/Event.js';
import axios from 'axios';
import "./Home.css";

class Home extends Component {
	state = {
		data: [1, 2, 3]
	}

	componentDidMount() {
		axios.get('/api/events')
			.then((data) => {
				let newArr = data.data.map((eventData) => {return { title: eventData.title, id: eventData.id } })
				this.setState({
					data: newArr
				});
			});
	}

	render() {
		return (
			this.state.data.map((event) => {return <Event key={event.title} title={event.title}/>})
		)
	}
}

export default Home