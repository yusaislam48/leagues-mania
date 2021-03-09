import './App.css';import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/league/:leagueId">
            <LeagueDetails></LeagueDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
