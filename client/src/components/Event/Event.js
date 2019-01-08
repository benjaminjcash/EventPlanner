import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
    state = {
		title: "",
		id: ""
    }

    componentDidMount() {
		let title = this.props.data.title;
		let id = this.props.data._id;
        this.setState({
            title: title,
			id: id
        })
    }
    
	handleDeleteEvent = () => {
		this.props.handleDelete(this.state.id);
	}

    render() {
        return (
        <div className="item" id={this.state.color}>
            <p>Event: {this.state.title}</p>
			<p>ID: {this.state.id}</p>
			<button onClick={this.handleDeleteEvent}>Delete</button>
        </div>
        )

    }
}

export default Event