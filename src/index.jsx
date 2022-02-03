import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Pages/Home/Home';
import Promocao from './Components/Pages/Promocao/Promocao';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Promocao" element={<Promocao/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


