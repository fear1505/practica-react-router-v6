import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App';
import Inicio from './routers/Inicio';
import Blog from './routers/Blog';
import Post from './routers/Post';
import Contacto from './routers/Contacto';
import NoEncontrado from './routers/NoEncontrado';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio />} />
          <Route path='blog' element={<Blog/>} />
          <Route path='blog/:id' element={<Post />} />
          <Route path='contacto' element={<Contacto/>} />

          <Route path='*' element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

