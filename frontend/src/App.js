import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Todos />
      </main>
      <Footer />
    </div>
  );
}

export default App;