import React, { useEffect, useState } from "react";
import axios from 'axios';

export const SearchBar = (props) => {
  
  const searchBarHandler = (e) => {
    props.setSearchBarInput(e.target.value)
    // console.log('search bar input: ', e.target.value)
  }

  const searchButtonHandler = () => {
    props.setAuthors([]);

    axios.get(`https://reststop.randomhouse.com/resources/authors?lastName=${props.searchBarInput}`)
    .then(data => props.setAuthors(data.data.author))
  }

  return (
  <div>
    <form onClick={function (e){ e.preventDefault() }}>
      <input onChange={searchBarHandler} placeholder="Search by last name"></input>
      <button onClick={searchButtonHandler}>Search</button>
    </form>
  </div>
  )
}

