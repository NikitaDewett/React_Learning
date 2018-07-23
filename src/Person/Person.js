import React from 'react';

const person = (props) => {
    return (
        <div className = "Person">
            <h1 onClick = {props.click}>I'm {props.name}, My age is {props.age}</h1>
            <input type = "text" onChange = {props.changed} value = {props.name} />
        </div>
    )
}

export default person;