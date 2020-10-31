import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import NoMatch from "./NoMatch/NoMatch";
import Login from "./component/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/NoMatch">
            <NoMatch />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
