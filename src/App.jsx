import { useState } from 'react'
import pokeBall from './assets/ball.png'
import viteLogo from '/vite.svg'
import './App.css'
import pokeData from './assets/poke.json'
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(pokeData);

  return (
    <>
      <h1>{data[count].name.english}</h1>
      <div className="card">
        <img src={"https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/"+data[count].name.english.toLowerCase() + ".png"}></img>
      </div>
      <div>
          <img style={{cursor:'pointer'}} onClick={()=>{setCount((prev)=>{return Math.floor(Math.random() * (data.length - 0 - 1))})}}  src={pokeBall} className="logo react" alt="React logo" />
      </div>
      <p className="read-the-docs">
        Click on the Pokeball to change the pokemon
      </p>
    </>
  )
}

export default App
