import Home from "./pages/Home"
import Cards from "./pages/Cards"
import Searched from "./pages/Searched"
import Search from "./pages/Search"
import Watchlist from "./pages/Watchlist"
import Show from "./pages/Show"
import NoShow from "./pages/NoShow"
import Nav from "./pages/Nav"
import ActorPage from "./pages/ActorPage"
import {useState, useEffect, useContext} from 'react'
import {Route, Routes } from 'react-router-dom' 
import { Context } from "./Context"



function App() {
 

   return (
    <>
    <Nav />
    <div className="container">
    
    <Routes>
      <Route exact path="/Home" element={<Home />} />
      <Route path="/Cards/" element={<Cards />} />
      <Route path="/show/:id" element={<Show />} />
      <Route path="/noshow" element={<NoShow />} />
      <Route path="/actorpage/:id" element={<ActorPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/watchlist" element={<Watchlist  />} />
    </Routes>
    
    </div>
    </>
  )
}

export default App
