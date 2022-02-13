import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Promocao from './Pages/Promocao/Promocao';
import Contato from './Pages/Contato/Contato';
import Destino from './Pages/Destino/Destino';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Promocao" element={<Promocao/>}></Route>
          <Route path="/Contato" element={<Contato/>}></Route>
          <Route path="/Destino" element={<Destino/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);