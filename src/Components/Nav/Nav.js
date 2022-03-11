import React from 'react'
import Logo from '../../data/images/cropped-logo.png'
import './Nav.scss'
import WatchListIcon from '../../data/images/watchlisticon.svg'
import SignInIcon from '../../data/images/signin.svg'

function Nav() {
  return (
    <section className='nav'>
      <img className='nav__logo' src={Logo} alt='pic'/>
      <input className='nav__search' placeholder='Search.'></input>
      <div className='nav__watchlist'>
        <img className='nav__icon' src={WatchListIcon} alt='pic'/>
        <p className='nav__sub'>Watchlist</p>
      </div>
      <div className='nav__signin-container'>
        <img className='nav__icon' src={SignInIcon} alt='pic'/>
        <h2 className='nav__signin'>Sign In</h2>
      </div>
    </section>
  )
}

export default Nav