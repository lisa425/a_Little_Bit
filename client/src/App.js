//import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage';
import NavBar from './components/views/Navbar/Navbar';
import TestPage from './components/views/TestPage/TestPage';
import TestIntro from './components/views/TestPage/TestIntro';
import TestResult from './components/views/TestPage/TestResult';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/testintro" component={TestIntro} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/test/result" component={TestResult} />
        </Switch>
    </Router>
  );
}

export default App;
