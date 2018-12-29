import React, { Component } from 'react';
import Event from '../../components/Event.js';
import axios from 'axios';

class Home extends Component {
	state = {
		data: [1, 2, 3]
	}

	componentDidMount() {
		axios.get('/api/events')
			.then((data) => {
				let arr;
				arr = (data.data);
				this.setState({
					data: arr
				});
			});
	}

	render() {
		return (
			this.state.data.map((event) => {return <Event key={event} poop={event}/>})
		)
	}
}

export default Home