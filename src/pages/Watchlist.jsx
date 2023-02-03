import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Context } from "../Context"
import { nanoid } from 'nanoid'
import ListItem from '../components/ListItem'

function Watchlist() {
  const{list, getWatchList} = useContext(Context) 
  
  

  useEffect(() => {
    getWatchList()
    localStorage.setItem('myShows', JSON.stringify(list))
  }, [])

 
  
  return (
    <>
    <h1 className='watchlist-title'>My Watchlist</h1>
    <div className='list-items'>
        {list?.map(show => 
        <ListItem 
            key={nanoid()}
            id={show.id}
            tvdb={show.externals.thetvdb}
            name={show.name}
            image={show.image?.medium}
            blurb={show.summary.slice(0, 150)}
            rating={show.rating.average}
            
            
        />
        )}
    </div>
    </>
  )
}

export default Watchlist