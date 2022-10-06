import React from 'react';
import MainContent from './MainContent.js';
import SearchBar from './SearchBar.js';

function Window() {
    return(
        <div>
            <SearchBar />
            <MainContent />
        </div>
    );
}

export default Window;