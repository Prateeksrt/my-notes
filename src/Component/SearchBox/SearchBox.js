import React, {useState} from 'react';
import './SearchBox.css';

const SearchBox = ({onSearch, onClear}) => {
    const [query, setQuery] = useState("");
    const handleQueryChange = (e) => setQuery(e.target.value);
    const handleKeyDown = (event) => event.key === 'Enter' &&  (query.length > 0 ? onSearch(query) : onClear());

    return (
        <input
            type="text"
            value={query}
            className="SearchBox Body2"
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
        />
    );
};

export default SearchBox;
