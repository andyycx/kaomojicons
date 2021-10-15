import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const KaomojiButton = ({ kaomoji }) => {
    const [copied, setCopied] = useState(false)

    return (
        <div>
            <CopyToClipboard text={kaomoji}
                onCopy={() => setCopied(true)}>
                <button>{kaomoji}</button>
            </CopyToClipboard>
            {copied 
                ? <span style={{color: 'red'}}> Copied </span>
                : null
            }
        </div>
    );
};

export default KaomojiButton;