import React, { useState } from 'react'
// Build a React component with two buttons + and - which increases/decreases the font size of a heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook.

const Question2 = () => {
    const [fontValue, setFontValue] = useState("18");
  return (
    <>
    <h1 style={{fontSize: `${fontValue}px`}}>Welcome</h1>
      <button onClick={()=> setFontValue(fontValue+1)}>+</button>
      <button onClick={()=> setFontValue(fontValue-1)}>-</button>
    </>
  )
}

export default  Question2;
