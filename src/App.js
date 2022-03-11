import './App.css';
import tools from './utils/tools';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"


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
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;