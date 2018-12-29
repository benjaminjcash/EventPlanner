import React, { Component } from 'react';

class Event extends Component {
    state = {
        value: 2
    }

    componentDidMount() {
        this.setState({
            value: this.props.poop
        })
    }
    
    render() {
        return (
        <div>
            <p>event {this.state.value}</p>
        </div>
        )

    }
}

export default Event