import React from 'react';
import KaomojiList from './components/KaomojiList/KaomojiList';
import './App.css'

const App = () => {
  return (
    <div className="grid-container">
      <div className="grid-header">
        <h1>Kaomojis</h1>
        <h2>
          Emoticons that use Japanese characters, Latin letters and
          punctuation marks to represent facial expressions that convey
          and emotion. 
        </h2>
        <h3>
          Click the Kaomoji you'd like to use and it will copy it to your
          clipboard.
        </h3>
      </div>
      <div className="grid-ads">
        Ads
      </div>
      <KaomojiList />
      <div className="grid-sidebar">
        Sidebar
      </div>
      <div className="grid-footer">
        Footer
      </div>
    </div>
  );
};

export default App;

/**


*/