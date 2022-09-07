
import './App.css';
import Header from './components/web/header'
import Partners from './components/web/partners'
import Footer from './components/web/footer'
import Testimonials from './components/web/testimonials'
import Leadershp from './components/web/Leadershp'

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
     <Header />
     <Testimonials />
     <Partners />
     {/* <Leadershp /> */}
     <Footer />
    </div>
  );
}

export default App;
