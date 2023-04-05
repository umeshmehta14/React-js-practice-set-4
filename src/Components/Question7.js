import React, { useState } from 'react'
// Build a game component in React where the player has a certain number of lives. Display the current number of lives and allows the player to decrement the number of lives by one with a button click. Once the number of lives reaches zero, display a "Game Over" message.

const Question7 = () => {
    const [lives, setLives] = useState(3)
    const DecreaseLife = () => setLives(lives - 1)
    

  return (
    <>
      <h1>Current lives : {lives}</h1>
      <button onClick={DecreaseLife}>lose a life</button>
      <div>{lives===0 && <><h1>Game Over</h1>
      <button onClick={()=> setLives(3)}>Restart</button></>}</div>
    </>
  )
}

export default Question7
