import React from "react";
//api - https://sujeitoprogramador.com/r-api/?api=filmes/
// npm install react-router-dom@5.x

import Routes from './routes'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify' //pra colocar uma ação de popup de alerta bem bacana 

function App() {
  return (
    <div className="app">
     <Routes />
     <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
