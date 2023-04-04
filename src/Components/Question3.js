import React, { useState } from 'react'
// Given an array of items:

// a. Build a React component that displays a list of items. Display fruits in orange color and vegetables in green color.

// b. Create two buttons to filter the items by their category using the useState hook.

const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];



const Question3 = () => {
    const [selected, setSelected]=useState(itemList);
    const clickHandle = (event)=>{
        if(event.target.value === "All")
        {
            setSelected(itemList);
        }
        else {

            const filterData = itemList.filter(({category})=> category === event.target.value);
            setSelected(filterData);
        }

    }

  return (
    <>
    <button onClick={clickHandle}  value="All">All</button>
    <button onClick={clickHandle} value="Fruit">Fruit</button>
    <button onClick={clickHandle} value="Vegetable">Vegetable</button>
    <ul>
      {
          selected.map(({name, category})=>{
              return <li style={{color:category==="Fruit"? "orange":"green"}}>{name}</li>
            })
        }
    </ul>
        </>
  )
}

export default Question3
