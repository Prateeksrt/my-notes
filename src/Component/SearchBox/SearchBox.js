import React, {useState} from 'react';
import './SearchBox.css';

const SearchBox = ({onSearch}) => {
    const [query, setQuery] = useState("");
    const handleQueryChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        !value && onSearch({isSearch: false});
    }
    const handleKeyDown = (event) => event.key === 'Enter' &&  (query.length > 0 ? onSearch({query, isSearch: true}) : onSearch({isSearch: false}));

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
