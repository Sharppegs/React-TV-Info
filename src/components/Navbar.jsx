import {useState} from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
  <>
    <div onClick={handleToggle} className={toggle? 'toggle-icon right' : 'toggle-icon'}>
          {toggle?<RiCloseLine />:<HiOutlineMenu />}
    </div>
    <nav className={toggle?'navbar expanded':'navbar'}>
    
        <h2 className='logo'>Logo</h2>
        
        <ul>
        <li onClick={handleToggle}><Link to="/Home" className="nav-link">Home</Link></li>
        <li onClick={handleToggle}><Link to="/Search" className="nav-link">Search</Link></li>
        <li onClick={handleToggle}><Link to="/Watchlist" className="nav-link">My Watchlist</Link></li>
        </ul>
    </nav>
    </>
  )
}