import Home from "./pages/Home"
import Searched from "./pages/Searched"
import Search from "./pages/Search"
import Watchlist from "./pages/Watchlist"
import Show from "./pages/Show"
import NoShow from "./pages/NoShow"
import Nav from "./pages/Nav"
import Header from "./components/Header"
import ActorPage from "./pages/ActorPage"
import {useState, useEffect, useContext} from 'react'
import {Route, Routes } from 'react-router-dom' 
import { Context } from "./Context"



function App() {



   return (
    <div className="app-layout">
      {/* <Header /> */}
      <Nav />
    <div className="container">
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/noshow" element={<NoShow />} />
        <Route path="/actorpage/:id" element={<ActorPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
    </div>
  )
}

export default App
