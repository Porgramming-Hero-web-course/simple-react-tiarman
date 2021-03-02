import logo from './logo.svg';
import './App.css';
import playerData from './Components/fakeData/Data.json'
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player';
import Cart from './Components/Cart/Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
    const names = playerData.map(player => player.name)
  }, [])


  const handleAddPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }
  return (
    <div>
      <h1 className="add-player">Player Added:{cart.length} </h1>

      <Cart cart={cart}></Cart>

      <ul>
        {
          player.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
        }
      </ul>
    </div>
  );
}

export default App;
