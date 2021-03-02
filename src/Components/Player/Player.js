import React from 'react';
import './Player.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, country, salary, phone, picture} = props.player;
    // const pictureStyle = {height: '250px'}
    // const playerStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player">
          <div className="container">
               <img className="player" src={picture} alt=""/>
               <div class="border border-light">
               <h5>Name: {name}</h5>
               <div>
               <h5><small>Country: {country}</small></h5>
               <h4><small>Salary: ${salary}</small></h4>
               <h4><small><FontAwesomeIcon icon={faPhoneSquareAlt}/> {phone}</small></h4>
               <button className="btn btn-success btn-lg" onClick={() =>handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faUser} />Add Player</button>
               </div>
               </div>
          </div>
          </div>
            
        
    );
};

export default Player;