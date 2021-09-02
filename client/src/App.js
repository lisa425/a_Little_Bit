//import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage';
import NavBar from './components/views/Navbar/Navbar';
import TestPage from './components/views/TestPage/TestPage';
import TestIntro from './components/views/TestPage/TestIntro';
import TestResult from './components/views/TestPage/TestResult';
import TestEarthList from './components/views/GuestBookPage/TestEarthList';
import EarthModal from './components/views/GuestBookPage/EarthModal'
import CardNewsPage from './components/views/CardNewsPage/CardNewsPage'
import ActionPlanPage from './components/views/ActionPlanPage/ActionPlanPage'
import ActionPlanEnding from './components/views/ActionPlanPage/ActionPlanEnding'
import DataCenterPage from './components/views/DataCenterPage/DataCenterPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React,{ useEffect, useState, useRef } from 'react';

function App() {
  // const [isLoading,setIsLoading] = useState(true);

  // useEffect(()=>{
  //   fetch("/api")
  //   .then((response) => {
  //     setIsLoading(false);
  //   });
  // })
  
  //if(isLoading) return <h1 style={{color:"gray"}}>Loading...</h1>;
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/testintro" component={TestIntro} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/test/result" component={TestResult} />

          <Route exact path="/guestbook" component={TestEarthList} />
          <Route exact path="/guestbook/:earthId" component={EarthModal} />

          <Route exact path="/cardnews" component={CardNewsPage} />

          <Route exact path="/actionplan" component={ActionPlanPage} />
          <Route exact path="/actionplan/ending" component={ActionPlanEnding} />

          <Route exact path="/explain" component={DataCenterPage} />
        </Switch>
    </Router>
  );
}

export default App;
