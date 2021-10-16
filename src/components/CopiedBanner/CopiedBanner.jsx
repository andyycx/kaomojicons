import React from 'react';
import './CopiedBanner.css';

const CopiedBanner = ({setCopied, kaomoji}) => {
    setTimeout(() => {
        setCopied(false)
    }, 3000)

    return (
        <div id="snackbar" className={"show"}>
            Copied {kaomoji} to clipboard
        </div>
    );
};

export default CopiedBanner;