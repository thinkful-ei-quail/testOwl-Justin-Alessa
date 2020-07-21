import React from 'react';

export default function Stage(props) {
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.avatar} alt="avatar" />
        </div>
    )
}