import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			printType: "all",
			bookType: "partial"
		}
	}

	getSearchResults(query) {
		const params = {
			q: encodeURI(query),
			filter: this.state.bookType,
			printType: this.state.printType,
			key: 'AIzaSyAAonQlH9qUwukYGc5k9FepSM8cYe9LiRs'
		}

		const urlParams = new URLSearchParams(Object.entries(params));
		console.log(urlParams.toString());

		const url = 'https://www.googleapis.com/books/v1/volumes?';
		fetch(url + urlParams)
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

	updatePrintType(result) {
		console.log(result);
		this.setState({
			printType: result
		})
	}

	updateBookType(result) {
		console.log(result);
		this.setState({
			bookType: result
		})
	}

	render() {
		return (
			<main className='App'>
				<header>
					<h1>Google Book Search</h1>
				</header>
				<SearchBar 
					handleSearch={query => this.getSearchResults(query)}
					bookType={result => this.updateBookType(result)}
					printType={result => this.updatePrintType(result)}/>
				<FilterableList 
					books={this.state.books}
					printType={this.state.printType}
					bookType={this.state.bookType}/>
    		</main>
		)
	}
}

export default App;
