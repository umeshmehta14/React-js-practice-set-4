import React, { useState } from 'react'
// Given an array of todoItems:

const todoItems = [
  {id: 1, task: "Writing 1-page poem", isDone: false},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: false},
]
// a. Build a React component that takes the todoItems as props and list all the todo tasks.

// b. Add a "Mark as Done" button against each item and toggle isDone property value between true and false on click of the button. If isDone is true change the color of that task to red with a strikethrough and if it is false remove the strikethrough and the red color.

const Question5 = () => {
    const [data, setData] = useState(todoItems);
    const clickHandle = (id)=>{
        const updatedItems = data.map((item) => (item.id === id) ? { ...item, isDone: !item.isDone }:item);
          setData(updatedItems);
    }
  return (
    <>
      <ul>{
          data.map(({id ,task, isDone}) =>{
            return <li> <span style={{color: isDone ? "red":"black", textDecoration:isDone?"line-through":"none"}}> {task}</span>
            <button onClick={()=> clickHandle(id)}>Mark as Done</button>
            </li>
          })
        }
        </ul>
    </>
  )
}

export default Question5
