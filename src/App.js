import React from 'react';
import kaomojis from './kaomojis.json';
import KaomojiButton from './components/KaomojiButton';

const App = () => {

  console.log(kaomojis);

  return (
    <div>
      {kaomojis.map(kaomoji =>
        <KaomojiButton key={kaomoji.id} kaomoji={kaomoji.kaomoji}/>)
      }
    </div>
  );
};

export default App;