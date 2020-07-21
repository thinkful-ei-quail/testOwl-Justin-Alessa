import React from 'react';

export default function Participants(props) {
  let message = '';
  if(props.inSession && !props.onStage){
    message='in session';
  }
  else{
    message = "onstage";
  }
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.avatar} alt="avatar" />
      <p>{message}</p>
      <p>{props.onStage}</p>
    </div>
  )
}

