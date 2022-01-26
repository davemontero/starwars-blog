import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return(
    <div className="container nav-container">
      <Link to="/" className='navbar-brand'>Star Wars</Link>
      <ul className="navbar-nav flex-row">
        <li className='nav-item ms-2'>
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className='nav-item ms-2'>
          <Link to="/elements/people" className='nav-link'>People</Link>
        </li>
        <li className='nav-item ms-2'>
          <Link to="/elements/planets" className='nav-link'>Planets</Link>
        </li>
        <li className='nav-item ms-2'>
          <Link to="/elements/species" className='nav-link'>Species</Link>
        </li>
        <li className='nav-item ms-2'>
          <Link to="/elements/starships" className='nav-link'>Starships</Link>
        </li>
        <li className='nav-item ms-2'>
          <Link to="/elements/vehicles" className='nav-link'>Vehicles</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar