import React from 'react';
import kaomojis from '../../kaomojis.json';
import './KaomojiList.css'

import KaomojiButton from '../KaomojiButton/KaomojiButton';

const KaomojiList = () => {
    return (
        <div className="row">
            {kaomojis.map(kaomoji =>
                <KaomojiButton key={kaomoji.id} kaomoji={kaomoji.kaomoji}/>)
            }
        </div>
    );
};

export default KaomojiList;