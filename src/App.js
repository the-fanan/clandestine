//modules
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//assets
import './assets/fontawesome/css/all.min.css';
import './assets/sass/bootstrap.scss';
import './assets/sass/style.scss';
//components
import NavBar from './components/shared/Nav.js';
import FooterBar from './components/shared/Footer.js';
import Error404 from './components/error/404.js'
//pages
import home from './views/home.js';
import about from './views/about.js';
import contact from './views/contact.js';
import trending from './views/trending.js';
import globalleaderboard from './views/leaderboard.js';
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
          <Route exact path="/about" component={about} />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/trending" component={trending} />
          <Route exact path="/global-leader-board" component={globalleaderboard} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
      <FooterBar/>
    </Router>
  </Provider>
  );
}

export default App;
