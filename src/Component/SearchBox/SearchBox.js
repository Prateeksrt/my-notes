import React, {useState} from 'react';
import './SearchBox.css';

const SearchBox = ({onSearch}) => {
    const [query, setQuery] = useState("");
    const handleQueryChange = (e) => setQuery(e.target.value);
    const handleKeyDown = (event) => event.key === 'Enter' && onSearch(query);

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
