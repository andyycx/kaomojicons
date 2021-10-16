import React from 'react';
import KaomojiList from './components/KaomojiList/KaomojiList';

const App = () => {
  return (
    <div>
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
      <KaomojiList />
    </div>
  );
};

export default App;