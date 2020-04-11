import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/sass/bootstrap.scss';
import './assets/sass/style.scss';

import NavBar from './components/shared/Nav.js';
import FooterBar from './components/shared/Footer.js';

import store from './redux/store.js';


function App() {
  return (
  <Provider store={store}>
    <Router>
      <NavBar/>
      <div className="container fluid">
        <Switch>
          
        </Switch>
      </div>
      <FooterBar/>
    </Router>
  </Provider>
  );
}

export default App;
