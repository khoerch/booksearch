import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			printType: "All",
			bookType: "No Filter"
		}
	}

	getSearchResults(query) {
		const url = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURI(query) + '&key=AIzaSyAAonQlH9qUwukYGc5k9FepSM8cYe9LiRs';
		fetch(url)
			.then(res => {
				if(!res.ok) {
					throw new Error('Something went wrong, please try again later');
				}
				return res.json();
			})
			.then(data => {
				console.log(data.items);
				this.setState({
					books: data.items,
					error: null
				})
			})
			.catch(err => {
				this.setState({
					error: err.message
				})
			})
	}

	render() {
		return (
			<main className='App'>
				<header>
					<h1>Google Book Search</h1>
				</header>
				<SearchBar 
					handleSearch={query => this.getSearchResults(query)}/>
				<FilterableList 
					books={this.state.books}
					printType={this.state.printType}
					bookType={this.state.bookType}/>
    		</main>
		)
	}
}

export default App;
