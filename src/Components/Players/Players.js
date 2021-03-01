import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Players.css'

const Players = (props) => {
    // console.log(props.playersInfo)
    const { name, email, salary, country, image } = props.playersInfo;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className=" player-box-design d-flex justify-content-center align-items-center" >
                <div className="player-details">
                    <h5>name:{name}</h5>
                    <p>email:{email}</p>
                    <p>salary:${salary}</p>
                    <p>country:{country}</p>
                    <button className="btn btn-dark" onClick={() => handleAddPlayer(props.playersInfo)}> <FontAwesomeIcon icon={faUserPlus} /> add player</button>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Players;