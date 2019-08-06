import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSearch(this.state.query);
    }

    queryChange(query) {
        this.setState({
            query
        })
    }

    render() {
        return (
            <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="title">Search: </label>
                <input 
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={this.state.query}
                    onChange={e => this.queryChange(e.target.value)}/>
                <button type="submit">Search</button>
            </form> 
        )
    }
}

export default SearchForm;