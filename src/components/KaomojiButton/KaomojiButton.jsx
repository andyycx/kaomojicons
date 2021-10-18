import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopiedBanner from '../CopiedBanner/CopiedBanner';
import './KaomojiButton.css'

const KaomojiButton = ({ kaomoji }) => {
    const [copied, setCopied] = useState(false)

    return (
        <div className="kaomoji-container">
            <CopyToClipboard text={kaomoji}
                onCopy={() => setCopied(true)}>
                <button className="kaomoji">{kaomoji}</button>
            </CopyToClipboard>
            {copied
                ? <CopiedBanner setCopied={setCopied} kaomoji={kaomoji} />
                : null
            }
            
        </div>
    );
};

export default KaomojiButton;