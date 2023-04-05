import React, { useState } from 'react'

// Given an array of books:

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
  { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
  { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
  { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Young Adult" },
];
// a. Build a React component that displays the title and author of each book.

// b. Add buttons to filter the books by genre using the useState hook.


const Question6 = () => {
    const [data, setData] = useState(books);
    const genreList = [ "All",...new Set(books.map(book => book.genre))];
    const setGenre =(genre) => {
        if(genre === "All")
        {
            setData(books);
        }
        else{

            const selectedData = books.filter(book => book.genre === genre);
            setData(selectedData);
        }
    }
  return (
    <>
      {
        genreList.map(item => <button onClick={() => setGenre(item)}>{item}</button>)
      }
      <ul>
        {
          data.map(({title, author}) =><div>
            <h1>{title}</h1>
            <p>{author}</p>
          </div>)
        }
      </ul>
    </>
  )
}

export default Question6
