import logo from './peter.png';
import './App.css';
import './fonts/family.guy.ttf';
import React from "react";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import Main from "./Main.js";
import Random from "./Random.js";
import Chapter from "./Chapter.js";
import Chapters from './data/chapters.json';

function App() {
  return (
  
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a mi Sitio para ver capítulos de:
        </p>
        
     
        {/*<Link className="App-link" to="/main">Family Guy</Link>*/}
      
      
        <Link className="App-link" to="/main">Family Guy - Capitulos</Link><br/>
        <Link className="App-link" to="/random">Capitulo Aleatorio</Link>
{/* 
Compartir vídeos
<iframe src="https://drive.google.com/file/d/1RT9qcN_XdyHgxdElGmKNYHH6HK0ZvK9y/preview" width="640" height="480" allow="autoplay"></iframe>
https://www.colby.edu/acits/2020/01/30/how-to-embed-a-video-from-google-drive/ */}
      <Routes>
    
      <Route  path="/main" element={<Main/>}/>
      <Route  path="/random" element={<Random />}/>
      <Route  path="/chapter/:id" element={<Chapter/>}/>
      </Routes>
     
      </header>
    </div>
    </Router>
  );
}

export default App;
