import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchFilter from '../SearchFilter/SearchFilter';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <SearchForm />
                <SearchFilter />
            </div> 
        )
    }
}

export default SearchBar;