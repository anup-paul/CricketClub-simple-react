import React from 'react';
import './AddPlayer.css'

const AddPlayer = (props) => {
    console.log(props.addPlayerInfo)
    const {name, salary, image} = props.addPlayerInfo
    return (
        <div className="add-player-box">
            <h4>{name}</h4>
            <h5>Salary:{salary}</h5>
            <img src={image} alt=""/>
        </div>
    );
};

export default AddPlayer;