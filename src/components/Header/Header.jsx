import logo from '../../assets/logo_color.svg'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
   return (
      <header className="header_container">
         <a className="header_link" href="/">
            <img className="header_logo" src={logo} alt="Logo de Kasa" />
         </a>
         <nav className="nav_container">
            <NavLink className="nav_link" to="/">
               Accueil
            </NavLink>
            <NavLink className="nav_link" to="/about">
               À propos
            </NavLink>
         </nav>
      </header>
   )
}

export default Header
