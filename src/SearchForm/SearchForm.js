import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
    render() {
        return (
            <form className="search-form">
                <label htmlFor="title">Search: </label>
                <input 
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"/>
                <button type="submit">Search</button>
            </form> 
        )
    }
}

export default SearchForm;