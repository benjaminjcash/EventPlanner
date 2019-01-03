import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
    state = {
        title: "title",
		color: "color"
    }

    componentDidMount() {
		let title = this.props.title;
		let color;
		switch (title) {
			case "Test Event 1":
				color = "red";
				break;
			case "Test Event 2":
				color = "blue";
				break;
			case "Test Event 3":
				color = "green";
				break;
		}
        this.setState({
            title: title,
			color: color
        })
    }
    
    render() {
        return (
        <div className="item" id={this.state.color}>
            <p>Event: {this.state.title}</p>
        </div>
        )

    }
}

export default Event