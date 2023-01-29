import {useState, createContext, useEffect} from "react"


const Context = createContext()

function ContextProvider({children}) {
    // const [veggie, setVeggie] = useState([])
    
    // const [cuisine, setCuisine] = useState([]) 
    // const [details, setDetails] = useState({})
    const [searchedShows, setSearchedShows] = useState([]) 
    const [showInfo, setShowInfo] = useState([]) 
    const [castInfo, setCastInfo] = useState([]) 
    const [episodes, setEpisodes] = useState([]) 
    const [actorInfo, setActorInfo] = useState([])
    const [actorCredits, setActorCredits] = useState([])
    const [watchlist, setWatchlist] = useState([])
    const [list, setList] = useState(() => JSON.parse(localStorage.getItem("myShows")))
    
    

    // const getVeggie = async () => {
    //     const vegCheck = localStorage.getItem('veggie')
    //    if(vegCheck) {
    //       setVeggie(JSON.parse(vegCheck))
    //         } else {
    //       const vegApi = 
    //       await fetch(`https://api.spoonacular.com/recipes/random?apiKey=613653434a3a4a9e94b5e6fa7f4da38b&number=9&tags=vegetarian`)
    //       const vegData = await vegApi.json()
    //       localStorage.setItem('veggie', JSON.stringify(vegData.recipes))
    //       setVeggie(vegData.recipes)
    //       console.log(vegData)
    //     }
    //   }

  
    // const getCuisine = async(name) => {
    //     const cuisData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=613653434a3a4a9e94b5e6fa7f4da38b&cuisine=${name}&number=9`)
    //     const cuisRecipes = await cuisData.json()
    //     setCuisine(cuisRecipes.results)
    // }

    // const fetchDetails = async (recipe) => {
    //     const data = 
    //       await fetch(`https://api.spoonacular.com/recipes/${recipe.name}/information?apiKey=613653434a3a4a9e94b5e6fa7f4da38b`)
    //     const detailsData = await data.json()
    //     setDetails(detailsData)
    //     console.log(detailsData)
    //   }

      const getSearched = async(name) => {
        const searchedData = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
        const searchedShowsData = await searchedData.json()
        setSearchedShows(searchedShowsData.slice(0,10))
        
    }

      const findProgramme = async(name) => {
        console.log(name)
        const programmeData = await fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${name}`)
        const foundProgrammeData = await programmeData.json()
        setShowInfo(foundProgrammeData)
        
    }

      const findCast = async(id) => {
        const CastData = await fetch(`https://api.tvmaze.com/shows/${id}/cast`)
        const foundCastData = await CastData.json()
        setCastInfo(foundCastData)
      }

      const findEpisodes = async(id) => {
        const EpisodeData = await fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
        const foundEpisodeData = await EpisodeData.json()
        setEpisodes(foundEpisodeData)
      }

      const findActor = async(id) => {
        const ActorData = await fetch(`https://api.tvmaze.com/people/${id}?embed=castcredits`)
        const foundActorData = await ActorData.json()
        setActorInfo(foundActorData)
      }
      
      const findActorCredits = async(id) => {
        const ActorCreditData = await fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`)
        const foundActorCreditData = await ActorCreditData.json()
        setActorCredits(foundActorCreditData)
      }

      function addToWatchList(newItem) {
        setWatchlist(prevItems => [...prevItems, newItem])
        setList(prevItems => [...prevItems, newItem]) 
        // localStorage.setItem('myShows', JSON.stringify(watchlist))
        console.log(newItem)
    }

    function getWatchList()  {
      const check = localStorage.getItem('myShows')
     if(check) {
        setList(JSON.parse(check))
         console.log(list.length)
      } else {
        console.log("No list")
      }
    }

    function removeFromList(id) {
      setList(prevItems => prevItems.filter(item => item.id !== id))
      console.log(list)

  }

  useEffect(() => {
    localStorage.setItem('myShows', JSON.stringify(list))
  }, [list])
    // useEffect(() => {
    //   localStorage.setItem('myShows', JSON.stringify(watchlist))
    // }, [])

    


    
    return (
        <Context.Provider value={{
            searchedShows,
            getSearched,
            showInfo,
            findProgramme,
            castInfo,
            findCast,
            episodes,
            findEpisodes,
            actorInfo,
            findActor,  
            actorCredits,
            findActorCredits,
            watchlist,
            addToWatchList,
            list,
            getWatchList,
            removeFromList
            
          }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}