import React from 'react';
import Header from './components/Header/Header';
import KaomojiList from './components/KaomojiList/KaomojiList';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <div className="ads">
      </div>
      <KaomojiList />
      <div className="adss">
      </div>
      <Footer />
    </div>
  );
};

export default App;

/**


*/