import React from 'react';

export default function Chatlog(props) {
    return (
        <div>
            <p>{props.type}</p>
            <p>{props.message}</p>
            <p>{props.timestamp}</p>
        </div>
    )
}