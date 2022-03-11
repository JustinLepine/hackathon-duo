import './Search.scss'
import React from 'react'

function Search(props) {
 
  return (

    <section className='search'>
      <div className='search__subsection'>
        <div>
          <h2 className='search__title'>English Title</h2>
          <h3 className='search__subtitle'>Japanese Title</h3>
        </div>
        <div className='search__subinfo'>
          <h4>year</h4>
          <h4>18A</h4>
          <h4>time</h4>
        </div>
      </div>
      <div className='search__media-holder'>
        <img className='search__image' src='https://cdn.myanimelist.net/images/anime/13/17405l.jpg' alt='anime-img'/>
        {/* <iframe className='search__video' src="https://www.youtube.com/watch?v=wnm-KT1UAyE"></iframe> */}
        
        <iframe className='search__video' width="560" height="315" src="https://www.youtube.com/embed/wnm-KT1UAyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='search__syp-holder'>
        <h3>Genre</h3>
        <p className='search__summary'>"Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes. [Written by MAL Rewrite]",
        "background": "Naruto received numerous awards during its airing, including the \"Best Full-Length Animation Program Award\" in the Third UStv Awards and the 38th \"Best Animated Show\" in IGN's Top 100 Animated Series.",</p>
      </div>
    </section>
  )
}

export default Search