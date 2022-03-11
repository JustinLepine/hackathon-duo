import './App.css';
import tools from './utils/tools'
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav"


function App() {  

  //This API brings in the list
  tools.getAnime(8).then(res => {
    console.log(res.data)
  })  

  //This one brings in characters if we need
  tools.getAnimeCharacters(2).then(res => {
    console.log(res.data)
  })

  return (
    // <BrowserRouter>
      <Nav />
    // </BrowserRouter>
  );
}

export default App;