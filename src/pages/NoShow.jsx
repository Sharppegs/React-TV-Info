import React from 'react'
import SearchBar from '../components/SearchBar'

function NoShow() {
  return (
    <div className="search no-show">
    <SearchBar />
    
    <h2>
        Unfortunately, no information on this title currently exists
    </h2>

    <img className='logo-no-show' src="/img/logo.png" />
    </div>
  )
}

export default NoShow