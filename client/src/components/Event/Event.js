import React, { Component } from 'react';
import './Event.css';

let Event = (props) => {
    return (
        <div className="item">
            <p>Event: {props.data.title}</p>
            <p>ID: {props.data._id}</p>
            <button onClick={() => props.handleDelete(props.data._id)}>Delete</button>
        </div>
    )
}

export default Event