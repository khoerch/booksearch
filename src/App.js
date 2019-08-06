import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [
				{
					title: 'Henry I',
					author: 'C. Warren Hollister',
					price: '$50.00',
					description: 'The resulting volume...',
					cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROor-EmSuab7C5CW0hyyRX7YUO_oTnIEQY0MvZGuydMGjbMDkY'
				}
			],
			printType: "All",
			bookType: "No Filter"
		}
	}

	render() {
		return (
			<main className='App'>
				<header>
					<h1>Google Book Search</h1>
				</header>
				<SearchBar />
				<FilterableList 
					books={this.state.books}
					printType={this.state.printType}
					bookType={this.state.bookType}/>
    		</main>
		)
	}
}

export default App;
