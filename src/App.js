// App.js
import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Home from './pages/Home';
import Register from './pages/Register';
import PasswordRecovery from './pages/PasswordRecovery';
import Login from './pages/Login';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  // Simulando a lógica de autenticação
  const isAuthenticated = false;

  return (
      <div>
        <GlobalStyle />
        <div style={{ display: 'flex' }}>
          {isAuthenticated ? (
            <>
              <Sidebar />
              <div style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                <Header />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/passwordrecovery" element={<PasswordRecovery />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </div>
      </div>

  );
};

export default App;
