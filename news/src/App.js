import React from 'react';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Health from './Views/Health';
import Technology from './Views/Technology';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <header>
        <NavBar/>
        <div>
        <br/>
          <Switch>
            <Route path="/sports">
              <Sports/> 
            </Route>
            <Route path="/health">
              <Health/>
            </Route>
            <Route path="/technology">
              <Technology/>
            </Route>
            <Route path="/">
              <Headlines/>
            </Route>
          </Switch>
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
