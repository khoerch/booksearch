import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
    render() {
        const price = (this.props.book.saleInfo.saleability === 'FOR_SALE')
            ? <p>Price: ${this.props.book.saleInfo.listPrice.amount}</p>
            : <p>Price: Not for sale.</p>

        return (
            <li className="list-item">
                <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"/>
                <div className="item-text">
                    <h2>{this.props.book.volumeInfo.title}</h2>
                    <p>Author: {this.props.book.volumeInfo.authors}</p>
                    {price}
                    <p>{this.props.book.volumeInfo.description}</p>
                </div>
            </li> 
        )
    }
}

export default ListItem;