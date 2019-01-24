import React from 'react';
import './Event.css';

let Event = (props) => {
    return (
        <div className='eventCard'>
            <div className='eventData'>
                <h1>{props.data.title}</h1>
                <p>{props.data.description}</p>
                <br/>
            </div>
            <div className='eventImage'>
                <img src={props.data.imgUrl} />
            </div>
            <div className='eventControls'>
                <button onClick={() => props.handleDelete(props.data._id)}>Delete</button>
            </div>
        </div>
    )
}

export default Event