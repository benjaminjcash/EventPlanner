import React, { Component } from 'react';

class Event extends Component {
    state = {
        title: "title"
    }

    componentDidMount() {
        this.setState({
            title: this.props.title
        })
    }
    
    render() {
        return (
        <div>
            <p>Event: {this.state.title}</p>
        </div>
        )

    }
}

export default Event