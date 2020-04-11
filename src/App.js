//modules
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//assets
import './assets/sass/bootstrap.scss';
import './assets/sass/style.scss';
//components
import NavBar from './components/shared/Nav.js';
import FooterBar from './components/shared/Footer.js';
//pages
import home from './views/home.js';
//store
import store from './redux/store.js';


function App() {
  return (
  <Provider store={store}>
    <Router>
      <NavBar/>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </div>
      <FooterBar/>
    </Router>
  </Provider>
  );
}

export default App;
