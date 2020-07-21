import React from 'react';

export default function Participants(props) {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.avatar} alt="avatar" />
      <p>{props.inSession}</p>
      <p>{props.onStage}</p>
    </div>
  )
}

