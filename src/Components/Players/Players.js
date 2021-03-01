import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Players.css'

const Players = (props) => {
    const { name, email, salary, country, image } = props.playersInfo;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className=" player-box-design d-flex justify-content-center align-items-center" >
                <div className="player-details">
                    <h5>Name:{name}</h5>
                    <p>Email:{email}</p>
                    <p>Salary:${salary}</p>
                    <p>Country:{country}</p>
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