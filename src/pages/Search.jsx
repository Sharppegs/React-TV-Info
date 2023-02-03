import React from 'react'
import SearchBar from '../components/SearchBar'

function Search() {
  return (
    <div className="search">
      <div className='search-title-logo'>
        <h1 className='search-title'>Search</h1>
       <img className='logo logo-right' src="/img/logo.png" />
       </div>
    <SearchBar />
    
      <img className='search-image' src="./img/example.png" alt="exampleimage" />
    
    </div>
  )
}

export default Search