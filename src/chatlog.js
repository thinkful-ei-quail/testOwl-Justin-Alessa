import React from 'react';

export default function Chatlog(props) {
    const time = new Date(props.timestamp)

    return (
        <div>
            <p>{props.type}</p>
            <p>{props.message}</p>
            <p>{time.toLocaleString()}</p>
        </div>
    )
}