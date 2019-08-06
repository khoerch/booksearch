import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
    render() {
        return (
            <li className="list-item">
                <h2>{this.props.title}</h2>
                <p>Author: {this.props.author}</p>
                <p>Price: {this.props.price}</p>
                <p>{this.props.description}</p>
                <img src={this.props.cover} />
            </li> 
        )
    }
}

export default ListItem;