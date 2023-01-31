import styled from 'styled-components'
import ShowCard from '../components/ShowCard'
import SearchBar from "../components/SearchBar"
import { useEffect, useContext, useState } from'react'
import { Context } from "../Context"
import { Link, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'


function Searched() {
  const {searchedShows, getSearched} = useContext(Context)  
  let searchedItems = useParams()
    

    useEffect(() => {
        getSearched(searchedItems.search)
        console.log(searchedShows)
    }, [searchedItems.search])

    const ShowCardElements = searchedShows?.map((show) =>  {
      return (
        <FilmCard key={nanoid()}>
          <ShowCard
            id={show.show.externals?.thetvdb}
            name={show.show.name}
            image={show.show.image?.medium}
            className="show-card"
            >
          </ShowCard>
        </FilmCard>
        )}
      )


  return (
 
    <div className='search-results'>
      <h1 className='logo-show'>Logo</h1>
      <SearchBar />
      <Grid>
        {ShowCardElements}
      </Grid>
    </div>
    
  )
}

const Grid = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3rem;

`

const FilmCard = styled.div`
 text-align: center;
  img{
    border-radius: 2rem;
    max-width: 250px;
    opacity: 0.8;
    object-fit: cover;
    transition: transform 200ms ease-in-out;
    margin-bottom: 1.5em;
  }

  h3 {
    
    color: #fff;
    z-index: 10;
    text-align: center;
    
  }

  img:hover   {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
  }

  

  a{
    text-decoration: none;
    
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`

export default Searched