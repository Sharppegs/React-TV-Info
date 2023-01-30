import React from 'react'
import SearchBar from '../components/SearchBar'

function Search() {
  return (
    <>
    <SearchBar />
    <div className='search-container'>
    <img className='search-image' src="./img/example.png" alt="exampleimage" />
    </div>
    </>
  )
}

export default Search