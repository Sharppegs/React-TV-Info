import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'

export const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
  <>
    <div onClick={handleToggle} className={toggle? 'toggle-icon right' : 'toggle-icon'}>
          {toggle?<Hamburger toggled={toggle} />:<Hamburger />}
    </div>
   
    <nav className={toggle?'navbar expanded':'navbar'}>
    
        <img className='logo' src="/img/logo.png" />
        
        <ul>
        <li onClick={handleToggle}><Link to="/" className="nav-link">Home</Link></li>
        <li onClick={handleToggle}><Link to="/search" className="nav-link">Search</Link></li>
        <li onClick={handleToggle}><Link to="/watchlist" className="nav-link">My Watchlist</Link></li>
        </ul>
    </nav>
    </>
  )
}
