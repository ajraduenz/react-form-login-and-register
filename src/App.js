import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getWindowDimensions from './Components/Functions/getWindowDimensions';

import Header from './Components/Header';
import Footer from './Components/Footer';

const Login = lazy(() => import('./Components/User/Login'));
const Cadastro = lazy(() => import('./Components/User/Cadastro'));

const MeuCadastro = lazy(() => import('./Components/User/MeuCadastro'));
const NotFound = lazy(() => import('./Components/User/NotFound'));


function App() {
  getWindowDimensions();
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Suspense fallback={<>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              Carregando...<div className="spinner"></div>
            </div>
          </>}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />  
              <Route path="/meu-cadastro" element={<MeuCadastro />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;

