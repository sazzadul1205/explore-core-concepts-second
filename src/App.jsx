import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './users'
import Friends from './friends'


function App() {

  function handleClick() {
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button clicked-->2')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>                                                                
      <h3>React Core Concepts pt-2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert('button clicked-->3')}>Click 3</button>
      {/* vagilla */}
      <button onClick={() => addToFive(4)}>Four</button>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App
