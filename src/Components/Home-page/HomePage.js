import React from 'react';
import data from '../../Fake-data/Fake-data.json'
import { useEffect, useState } from 'react';
import './HomePage.css'
import Players from '../Players/Players';
import Cart from '../Cart/Cart';

const HomePage = () => {
    const [players, setPlayers] = useState([])
    
    useEffect(() => 
    {
        setPlayers(data)
        // console.log(data);
    }, [])
    const [cart, setCart] = useState([])
    const handleAddPlayer = (newPlayer) =>
    {
        // console.log('player added',newPlayer);
        const newCart = [...cart, newPlayer];
        setCart(newCart);
        // const newCart = [...cart, newPlayer]
        // setCart(newCart);
    }
    return (
        <div className="main-container ">
            <div className="players">
               {
                   players.map(player => 
                    <Players 
                        playersInfo = {player}
                        key = {player.id}
                        handleAddPlayer = {handleAddPlayer}
                    ></Players>)
               }
            </div>
            <div className="cart">
                <Cart cartInfo = {cart} ></Cart>
                {/* <h3>Cart summary : {cart.length}</h3> */}
            </div>
        </div>
    );
};

export default HomePage;