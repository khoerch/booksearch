import React from 'react';
import './SearchFilter.css';

class SearchFilter extends React.Component {
    render() {
        return (
            <div className="search-filter">
                <div>
                    <label htmlFor="print-type">Print Type:</label>
                    <input list="print-types" id="print-type" name="print-type" />
                    <datalist id="print-types">
                        <option value="All"/>
                        <option value="eBook"/>
                        <option value="Free"/>
                        <option value="Pint-only"/>
                    </datalist>
                </div>
                <div>
                    <label htmlFor="book-type">Book Type:</label>
                    <input list="book-types" id="book-type" name="book-type" />
                    <datalist id="book-types">
                        <option value="No Filter"/>
                        <option value="Books only"/>
                        <option value="magazine"/>
                        <option value="newspaper"/>
                    </datalist>
                </div> 
            </div>
        )
    }
}

export default SearchFilter;