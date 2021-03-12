import React from 'react';
import './App.css';

import Header from './componentes/Header/index';
import Footer from './componentes/Footer/footer';
import HomePage from './componentes/HomePage/index';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;