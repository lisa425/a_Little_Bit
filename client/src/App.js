import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage';
import TestPage from './components/views/TestPage/TestPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/test" component={TestPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
