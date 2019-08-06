import React from 'react';
import './SearchFilter.css';

class SearchFilter extends React.Component {
    render() {
        return (
            <div className="search-filter">
                <div>
                    <label htmlFor="print-type">Print Type:</label>
                    <select id="print-types" onChange={e => this.props.printType(e.target.value)}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="book-type">Book Type:</label>
                    <select id="book-types" onChange={e => this.props.bookType(e.target.value)}>
                        <option value="partial">No Filter</option>
                        <option value="full">Full Books</option>
                        <option value="free-ebooks">Free E-books</option>
                        <option value="paid-ebooks">Paid E-books</option>
                        <option value="ebooks">E-books Only</option>
                    </select>
                </div> 
            </div>
        )
    }
}

export default SearchFilter;