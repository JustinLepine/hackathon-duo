import React from 'react'
import { Link } from 'react-router-dom';
import tools from '../../utils/tools'
import Search from '../Search/Search'



 class Home extends React.Component {
  state = {
    animeInfo: []
  } 

  componentDidMount = () => {
    tools.getAnime(8).then(res => {
      this.setState ({ 
        animeInfo: res.data
      })
      // console.log(animeInfo)
    })
  }

  render() {
    return (
      <Link to= '/Search'>
        <button>search</button>
      </Link>
    )
  }
}

export default Home