import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Context } from "../Context"
import Actor from '../components/Actor'
import { nanoid } from 'nanoid'


function Show() {
const {showInfo, findProgramme, findCast, castInfo, findEpisodes, episodes} = useContext(Context) 
const showId = useParams()

console.log(showId.id)

function date(day) {
  let goodDay = new Date(day).toDateString()
  return goodDay
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


const { name, summary, image, rating, premiered, genres, ended, averageRuntime, language } = showInfo

  return (
    <div className='show-container'>
      <div key={nanoid()}>      
      <div className="show-grid">
        <div className='show-left'>
          <img className='show-image' src={image?.medium} alt={name} />
        </div>
        
        <div className='show-right'>
          <div className='title-rating'>
            <h1 className='show-title'>{name}</h1>
            <h4>{rating?.average} ⭐</h4>
        </div>

          <div className='show-details'>
            <p dangerouslySetInnerHTML={{__html: summary}}></p>
            <p>First episode: {date(premiered)}</p>
            <p>Last episode: {ended === null ? "Ongoing" : date(ended)}</p>
            <p>{genres?.join(", ")}</p>
            <p>Average show length: {averageRuntime} minutes</p>
            <p>Language: {language}</p>
          </div>

            <div className='add'>
              <button className='add-button'>Add +</button>
            </div>

            
        </div>  

        
        <div className='cast-info'>
          
        <h2>Cast</h2>
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
              <h2>{episodes?._embedded?.episodes.length} Episodes</h2>
              <ul>
                {episodes?._embedded?.episodes.map((episode, i) => 
                <li key={nanoid()}>
                  <img className='episode-image' src={episode.image?.medium}/>
                  <h5 className="episode-title">{i + 1}. {episode.name.slice(0,25)}</h5>
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