import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Context } from "../Context"
import Actor from '../components/Actor'
import { nanoid } from 'nanoid'
import SearchBar from '../components/SearchBar'


function Show() {
const {showInfo, findProgramme, findCast, castInfo, findEpisodes, episodes, watchlist, addToWatchList, list, removeFromList} = useContext(Context) 
const showId = useParams()

console.log(showId.id)

function date(day) {
  let goodDay = new Date(day).toDateString()
  return goodDay
} 

function addShow(show) {
  const alreadyOnWatchlist = list.some(item => item.id === show.id)
  if(alreadyOnWatchlist) {
    removeFromList(show.id)
    console.log("Already on your List")
    
      // return <i className="ri-heart-fill favorite" onClick={() => removeFromFav(img.id)}></i>
  } else {
    addToWatchList(show)
    
      // return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id, img)}></i>
  } 
}



useEffect(() => {
  findProgramme(showId.id)
  console.log(showInfo.id)
}, [showId.id])

useEffect(() => {
  findCast(showInfo.id)
}, [showInfo])

useEffect(() => {
  findEpisodes(showInfo.id)
  console.log(episodes)
}, [castInfo])

useEffect(() => {
  localStorage.setItem('myShows', JSON.stringify(list))
}, [list])


const { name, summary, image, rating, premiered, genres, ended, averageRuntime, language, id } = showInfo

  return (
    <div className='show-container'>
      <h1 className='logo-show'>Logo</h1>
      <SearchBar />
      <div key={nanoid()} id={id}>      
      <div className="show-grid">
        <div className='show-left'>
        <h1 className='show-title-mobile'>{name}</h1>
          <img className='show-image' src={image?.medium} alt={name} />
        </div>
        
        <div className='show-right'>
          <div className='title-rating'>
            <h1 className='show-title'>{name}</h1>
            <div className='add'>
              <button 
                className={list.some(item => item.id === id) ? "add-button remove" : "add-button"} 
                onClick={() => addShow(showInfo)}
              >
                {list.some(item => item.id === id) ? "Remove" : "Add +"}</button>
            </div>
            
        </div>

          <div className='show-details'>
            <p dangerouslySetInnerHTML={{__html: summary}}></p>
            <div className='rating'> 
              <h2>{rating?.average} ⭐</h2>
            </div>
            <p>First episode: {date(premiered)}</p>
            <p>Last episode: {ended === null ? "Ongoing" : date(ended)}</p>
            <p>{genres?.join(", ")}</p>
            <p>Average show length: {averageRuntime} minutes</p>
            <p>Language: {language}</p>
          </div>

          
            
        </div>  

        
        <div className='cast-info'>
          
        <h2 className="cast-title">Cast</h2>
              {castInfo?.map(actor => 
              <Actor 
                key={nanoid()}
                id={actor.person.id}
                image={actor.person.image?.medium}
                character={actor.character.name}
                actorName={actor.person.name}
                />
                // <div className='actor'>
                //     <img className='cast-image' src={actor.person.image?.medium} />
                //     <p>{actor.character.name}</p>
                //     <p>{actor.person.name}</p>
                // </div>
                )}
            </div>

            <div className='episode-info'>
              <h2 className='episode-info-title'>{episodes?._embedded?.episodes.length} Episodes</h2>
              <ul>
                {episodes?._embedded?.episodes.map((episode, i) => 
                <li key={nanoid()}>
                  <img className='episode-image' src={episode.image?.medium}/>
                  <h5 className="episode-title">{i + 1}. {episode.name.slice(0, 25)}</h5>
                  <p className='air-date'>{episode.airdate}</p>
                </li>)}
                
              </ul>
            </div>
            </div>   
        
        
        </div>
      </div>
  )
}

export default Show