import React, { useEffect, useState} from 'react';
import axios from 'axios';

export const Authors = (props) => {
const [works, setWorks] = useState([])

const handleNameClick = (author) => {
  if (Array.isArray(author.works)) {
    author.works.map((work) => {
      setWorks(
        axios.get(`https://reststop.randomhouse.com/resources/works/${work}/`)
      )
    })
  } else {
    setWorks(
      axios.get(`https://reststop.randomhouse.com/resources/works/${author.works.works}/`)
    )
  }
  console.log(works)
}

return (
  <ul className='link-container'>
    {props.authors && props.authors.length > 0 ? props.authors.map((author) => {
      if (author.works) {
        return (
          <li className='name-link' key={author.authorid} onClick={() => { handleNameClick(author) }}>{author.authordisplay}</li>
      )
      }
    }) : null}
  </ul>
)
}

