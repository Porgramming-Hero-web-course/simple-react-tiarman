import React from 'react';
import Player from '../Player/Player';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + player.salary;
        
    }
    // const totalSalary = cart.reduce((sum, player) => sum + Player.salary, 0)
    return (
        <div className="player-cart">
            
            <ul>
                <h3>Selected Players</h3>
                {
                    cart.map (cart => <li>{cart.name}</li>)
                }
            </ul>
            <h3>Total Salary: ${totalSalary}</h3>
        </div>
    );
};

export default Cart;