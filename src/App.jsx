import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import KaomojiList from './components/KaomojiList/KaomojiList';
import Footer from './components/Footer/Footer';
import './App.css'
import ReactGA from 'react-ga'

const App = () => {
  ReactGA.initialize('G-KHRSM3RLPY');
  ReactGA.pageview(window.location.pathname + window.location.search);

  useEffect(() => {
    document.title = "Kaomojicons"
  }, [])

  return (
    <div className="grid-container">
      <Header />
      <div className="ads">
      </div>
      <KaomojiList />
      <div className="anuncios">
      </div>
      <Footer />
    </div>
  );
};

export default App;