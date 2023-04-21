import React from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import Home from './component/Home'



function App() {
  return (
   <div className="App">
   <BrowserRouter>
   <Routes>

    <Route path='/'  element={<Home/>}></Route>
  
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
