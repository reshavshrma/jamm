import React from 'react';
import './components/App.css';
import AttractionsPage from './components/AttractionsPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <AttractionsPage />
      <Footer />
    </div>
  );
}

export default App;
