import React, { useState } from 'react'

// Given an array of characters, build a Tab component in React that shows the name of characters on click of two buttons, one for heroes and other for villains. On click of “Show Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list of villains should be displayed on the DOM. Use useState Hook.

const characters = {
  heroes: [
    {
      name: "IRON MAN",
      powers: "Genius,Rich,IRON Suit",
      costume: "IRON MAN suit",
    },
    {
      name: "ANT MAN",
      powers: "Ant man suit",
      costume: "Ant man suit",
    },
    {
      name: "Spider-man",
      powers: "Reflexes,Speed,Spider-Sense",
      costume: "Spider Suit",
    },
    {
      name: "Bat man",
      powers: "Rich,Bat suit",
      costume: "Bat Suit",
    },
    {
      name: "Super-man",
      powers: "Superhuman strength,Reflexes,Speed",
      costume: "Superman  Suit",
    },
  ],
  villains: [
    {
      name: "Thanos",
      powers: "Superhuman strength,Reflexes,Speed,",
      costume: "Metal armor",
    },
    {
      name: "Venom",
      powers: "shapeshifting and camouflage Symbiotes autonomous defense",
      costume: "black suit",
    },
    {
      name: "Kang the conqueror",
      powers: "time travel, can access all tech",
      costume: "kang armor",
    },
    {
      name: "Joker",
      powers: "clownlike appearance and sick humour",
      costume: "Joker costume",
    },
  ],
};


const Question1 = () => {
    const [selectedData, setSelectedData] = useState([]);
    const HandleClick = (event) => {
        if(event.target.value === "Super Hero")
        {
            setSelectedData(characters.heroes)

        }
        else
        {
            setSelectedData(characters.villains);
        }
    }
  return (
    <div>
      <button onClick={HandleClick} value={"Super Hero"}>Super Hero</button>
      <button onClick={HandleClick} value={"Villains"}>Villains</button>
      <div>
        {
            selectedData.map(({name, powers, costume}) => {
                return (
                  <div key={name}>
                    <h3>{name}</h3>
                    <p>{powers}</p>
                    <p>{costume}</p>
                    </div>)
        })
        }
      </div>
    </div>
  )
}

export  {Question1 as Tab};
