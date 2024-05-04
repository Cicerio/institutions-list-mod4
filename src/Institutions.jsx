import React from 'react';

function Institutions(props){

    return(
        <div>
            <h2>{props.data.name}</h2>
            <h3>{props.data.date[0]} - {props.data.date[1]}</h3>
            <p>{props.data.desc}</p>
        </div>
    )
}

export default Institutions