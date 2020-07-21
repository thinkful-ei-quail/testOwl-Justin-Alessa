import React from 'react';


// function testIf(props){
//     let stageShow;
//     if (props.onStage === true){
//         stageShow = (
//             <div>
//             <p>{props.name}</p>
//             <img src={props.avatar} alt="avatar" />
//             </div>
//         )
//     }
// }

// export default function Stage(props) {
//     return testIf();
// }


export default function Stage(props) {
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.avatar} alt="avatar" />
        </div>
    )
}