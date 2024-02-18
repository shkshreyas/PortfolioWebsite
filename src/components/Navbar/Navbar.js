import React from 'react'
import "./Navbar.css"
import logo from '../../img/shklogo.ico';
import contact from '../../img/contact.png';
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem' >Home</Link>
        <Link className='desktopMenuListItem' >About</Link>
        <Link className='desktopMenuListItem' >Portfolio</Link>
        <Link className='desktopMenuListItem' >Clients</Link>

      </div>
      <button className='desktopMenuBtn'>
        <img src={contact} alt=' ' className='desktopMenuImg'/>
      </button>
    </nav>
  )
}

export default Navbar