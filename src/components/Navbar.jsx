import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return(
    <div className="container nav-container">
      <Link to="/" className='navbar-brand'>Star Wars</Link>
      <ul className="navbar-container">
        <Link to="/">
          <li className='navbar-item'>
            Home
          </li>
        </Link>
        <li className='navbar-item navbar-dropdown'>
          Categories
          <div className='navbar-content'>
            <Link to="/elements/people" className='dropdown-link'>People</Link>
            <Link to="/elements/planets" className='dropdown-link'>Planets</Link>
            <Link to="/elements/species" className='dropdown-link'>Species</Link>
            <Link to="/elements/starships" className='dropdown-link'>Starships</Link>
            <Link to="/elements/vehicles" className='dropdown-link'>Vehicles</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar