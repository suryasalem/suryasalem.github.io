// import logo from './pingu-no-bg.png';
import './App.css';
import './realtimecolors.css';
import { isMobile, browserName } from "react-device-detect";
import MediaQuery from 'react-responsive';

import Homepage from './components/desktop/homepage';
import Work from './components/desktop/work';
import Projects from './components/desktop/projects';
import About from './components/desktop/about';

import MobileHomepage from './components/mobile/mobileHomepage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <MediaQuery maxWidth={650}>
        <MobileHomepage />
      </MediaQuery>
      <MediaQuery minWidth={650}>
        <Router>
          {/* <Homepage /> */}

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </MediaQuery>
    </div>
  );

  // if (isMobile) {
  //   console.log('user is on mobile');
  //   return (
  //     <div className="App">
  //       <MobileHomepage />
  //     </div>
  //   );
  // }

  // console.log('user is on', browserName);
  // return (
  //   <div className="App">

  //     <Homepage />
  //   </div>

  // );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
