import React from 'react';
import Header from './components/Header/Header';
import KaomojiList from './components/KaomojiList/KaomojiList';
import './App.css'

const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <div className="ads">
        Ads
      </div>
      <KaomojiList />
      <div className="adss">
        Ads
      </div>
      <div className="footer">
        Footer
      </div>
    </div>
  );
};

export default App;

/**


*/