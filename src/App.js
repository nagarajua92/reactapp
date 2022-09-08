
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from  './components/web/Home';
import Contact from  './components/web/Contact'

// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';

import './assets/css/style.css'

function App() {
  return (
    <div>
      <Router>

      <Switch>
      <Route exact path='/' component={Home} />
       <Route path='/contact-us' component={Contact} />
      
      </Switch>
       
     </Router>
    </div>
  );
}

export default App;
