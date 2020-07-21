import React from 'react';

let stageShow;

if (props.onStage === true){
    stageShow = (
        <div>
        <p>{props.name}</p>
        <img src={props.avatar} alt="avatar" />
        </div>
    )
}



export default function Stage(props) {
    return stageShow;
}



// function testIf(props){
//     if (props.onStage === true){
//         return(
//         <>
//             <p>{props.name}</p>
//             <img src={props.avatar} alt="avatar" />
//         </>
//         )
//     }
    
// };