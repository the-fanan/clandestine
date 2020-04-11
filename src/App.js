import React from 'react';
import './assets/sass/bootstrap.scss';
import './assets/sass/style.scss';
import NavBar from './components/shared/Nav.js'

function App() {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-12">
          <NavBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
