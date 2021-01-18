import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// custome imports
import Home from './pages/home';
import './App.css';
import DetailPage from './pages/detailPage';
import Thankyou from './pages/thankYou';


function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/tvs/:tvId"
          component={DetailPage}
        />
        <Route
          exact
          path="/thankyou"
          component={Thankyou}
        />
      </div>
    </Router>
  );
}

export default App;
