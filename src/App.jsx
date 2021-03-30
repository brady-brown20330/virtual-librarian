import React, { useEffect, useState } from "react";
import axios from 'axios';
import { SearchBar } from './components/SearchBar';
import { Authors } from './components/Authors';
/*
In the end, this should look like a searchbar that returns a 
list of authors based on a search, the returned athor's name should
be clackable, and should pull up a list of their works with title
images. 


*/
const App = () => {
const [authors, setAuthors] = useState([])
const [searchBarInput, setSearchBarInput] = useState('')

// console.log('authors in app.jsx: ', authors)
  return (
    <div className="app">
      <h1>Hello, I am programmed to search for Authors.</h1>
      <SearchBar searchBarInput={searchBarInput} setSearchBarInput={setSearchBarInput} setAuthors={setAuthors}/>
      <Authors authors={authors}/>
    </div>
  )
}

export default App;