import React from 'react'
import SearchBar from '../components/SearchBar'

function Search() {
  return (
    <div className="search">
       <h1 className='logo-show'>Logo</h1>
    <SearchBar />
    
      <img className='search-image' src="./img/example.png" alt="exampleimage" />
    
    </div>
  )
}

export default Search