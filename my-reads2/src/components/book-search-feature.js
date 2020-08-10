import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import ListSearch from './list-search';
import QuerySuggestion from './query-suggestion';
import './components.css';

class BookSearchFeature extends Component {
	state={
		query: '',
		catalog: [],
		display: 'none',
	}
	/* Static list of query terms that will produce book results provided in project repository --- Used to proved search suggestion in search Component */
	terms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

	componentDidMount() {
		(this.state.query === '')
		? BooksAPI.search('a')
	    	.then(catalog => {
		    	this.setState((prevState) => ({
		    		catalog
		    	}))
	    	})
    	: BooksAPI.search(this.state.query)
	    	.then(catalog => {
		    	this.setState((prevState) => ({
		    		catalog
		    	}))
	    	})
  	}

	updateQuery = (query) => {
		this.setState(curState => ({ // updates query  with input value
			query: query
		}))
		if (query !== '') {
			this.updateCatalog(query) // updates catalog with each change of the query
			this.updateDisplay('') // initiates UI refresh by updating the display state and displays query suggestion
    	} else {
    		this.updateCatalog(); // when query is empty search catalog display is set back to 'a' query default
    		this.updateDisplay('none') // causes query suggestion box UI to not display
    	}

	}

	clearQuery = () => {
		this.setState({ // clears the query and search input
			query: ''
		})
		this.updateDisplay('none') // causes query suggestion box UI to not display
		this.updateCatalog(); // sets default catalog UI
	}

	updateCatalog = (query = 'a') => { // updates the catalog according to the query entered default value ensures catalog UI in never empty
		BooksAPI.search(query)
	    	.then(catalog => {
		    	this.setState((prevState) => ({
		    		catalog
		    	}))
	    	})
	}

	updateDisplay = (display) => { // toggle display state
		this.setState({
			display: display
		})
	}

	render() {
		return(
			<div className='book-search-feature'>
				{/* Search Box */}
				<div className='search-bar'>
					<input
					className='search-books'
					name='search-books'
					type='text'
					placeholder='Search Catalog'
					value={this.state.query}
					onChange={event => this.updateQuery(event.target.value.toLowerCase())}
					onKeyPress={event => (event.keyCode === 8) && this.updateCatalog(event.target.value.toLowerCase())}
					autoFocus
					/>
					{/* Clear the search box*/}
					<button className='clear-search-button' onClick={event => this.clearQuery()}>clear</button>
					{/* call the query suggestion component */}
					{this.state.query !== '' && !this.terms.includes(this.state.query) && !this.state.catalog.error && (
					<QuerySuggestion terms={this.terms} query={this.state.query} display={this.state.display} updateQuery={this.updateQuery}/>
					)}
				</div>
				{/* Displays the catalog UI */}
				<ListSearch query={this.state.query} catalog={this.state.catalog} updateCatalog={this.updateCatalog} books={this.props.books} updateBooks={this.props.updateBooks}/>
			</div>
		)
	}

}
export default BookSearchFeature;