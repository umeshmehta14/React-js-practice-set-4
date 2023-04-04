import React, { useState } from 'react'

// Given an array of todoItems:

// a. Build a React component that takes the todoItems as props and list all the todo tasks. b. if isDone is true then show the item with a strikethrough.

// Example

// c. Add a X button against each item and remove that task from the list on click of the button.
const todoItems = [
  {id: 1, task: "Writing 1-page poem", isDone: true},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: true},
]

const Question4 = () => {
    const [data , setData]=useState(todoItems);
    const HandleClick = (index) => {
        const deletedTask = data.filter((e)=> e.id !== index);
        setData(deletedTask);
    }
  return (
    <div>
      <ul>
        {
            data.map((item)=> {
                return (
                  <li key={item.id} style={{textDecoration:item.isDone?"line-through":"none"}}>
                    {item.task}
                  <button onClick={()=>HandleClick(item.id)}>X</button>
                  </li>
            )})
        }
      </ul>
    </div>
  )
}

export default Question4
