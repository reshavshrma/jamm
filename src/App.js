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
      <div className="container">
        <div className="row">
          <div className="col">
            <HomePage />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AttractionsPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;