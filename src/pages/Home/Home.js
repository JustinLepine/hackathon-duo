import React from 'react'
// import Logo from '../../data/images/cropped-logo.png'
import Add from '../../data/images/addwatch.svg'
import './Home.scss'

function Home() {
  return (
    <section className='home'>
      <h1 className='home__title'>Bookmarked Shows</h1>
      <form className='home__form'>
        <input className='home__search' placeholder='Add your favourite shows'></input>    
        <img className='home__icon' src={Add} alt="pic" /> 

      </form>
      {/* <img className='home__logo' src={Logo} alt='pic'/> */}
    </section>
  )
}

export default Home