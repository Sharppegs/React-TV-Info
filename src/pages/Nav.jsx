import {useState} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <>
    <NavBar className={mobileMenuOpen ? 'nav-appear' : 'nav-disappear'}>
      
        <h1>Logo Header</h1>
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Search" className="nav-link">Search</Link>
        <Link to="/Watchlist" className="nav-link">My Watchlist</Link>

    </NavBar>

      <div className="nav-btns">
      {mobileMenuOpen ? (
        <RiCloseLine className="nav-close"
            onClick={() => setMobileMenuOpen(false)} /> 
        ) : <HiOutlineMenu className='nav-close'
            onClick={() => setMobileMenuOpen(true)} />}
      </div>
</>
  )
}

export default Nav

const NavBar = styled.div`
  
  position: relative;

  @media(min-width: 868px) {
    background: #041C32;
    margin-left: 0;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding: 1em;
    font-size: 1.25rem;
    
  }

`