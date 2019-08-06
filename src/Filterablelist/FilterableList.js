import React from './node_modules/react';
import ListItem from '../ListItem/ListItem';
import './FilterableList.css';

class FilterableList extends React.Component {
    render() {
        const list = this.props.books.map(item => {
            return (<ListItem 
                title={item.title}
                author={item.author}
                price={item.price}
                description={item.description}
                cover={item.cover}/>)
        })

        return (
            <ul className="book-list">
                {list}
            </ul>
        )
    }
}

export default FilterableList;