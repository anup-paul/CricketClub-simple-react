import React from 'react';

const AddPlayer = (props) => {
    console.log(props.addPlayerInfo)
    const {name, salary, image} = props.addPlayerInfo
    return (
        <div>
            <h3>{name}</h3>
            <h3>{salary}</h3>
            <img src={image} alt=""/>
        </div>
    );
};

export default AddPlayer;