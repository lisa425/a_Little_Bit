//import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage';
import TestPage from './components/views/TestPage/TestPage';
import TestIntro from './components/views/TestPage/TestIntro';
import InputName from './components/views/TestPage/inputUserData/InputName';
import NavBar from './components/views/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/testintro" component={TestIntro} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/test/inputname" component={InputName} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
