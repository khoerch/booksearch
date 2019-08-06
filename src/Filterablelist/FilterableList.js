import React from 'react';
import ListItem from '../ListItem/ListItem';
import './FilterableList.css';

class FilterableList extends React.Component {
    render() {
        const list = this.props.books.map((item, i) => {
            return (<ListItem 
                key={i}
                book={item}/>)
        })

        return (
            <ul className="book-list">
                {list}
            </ul>
        )
    }
}

export default FilterableList;