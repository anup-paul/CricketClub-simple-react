import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Players.css'

const Players = (props) => {
    // console.log(props.playersInfo)
    const {name, email, salary,country, image} = props.playersInfo;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className=" player-box-design d-flex" >
            <div className="player-details">
                <h2>name:{name}</h2>
                <h4>email:{email}</h4>
                <h4>salary:{salary}</h4>
                <h4>country:{country}</h4>
                <button className="btn btn-danger" onClick = {()=>handleAddPlayer(props.playersInfo)}>add player</button>
            </div>
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default Players;