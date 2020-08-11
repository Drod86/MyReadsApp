import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import ListSearch from './list-search';
import QuerySuggestion from './query-suggestion';
import './components.css';

class BookSearchFeature extends Component {
	state={
		query: '',
		catalog: [],
		suggestions: [],
		display: 'none'
	}

	/* Static list of query terms that will produce book results provided in project repository --- Used to proved search suggestion in search Component */
	terms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

	componentDidMount(){
		(this.state.query === '' || this.state.query === ' ') // avoiding errors present when API request is made with an empty query
		? this.setState({
			catalog: []
		})
		: BooksAPI.search(this.state.query)
    	  .then(catalog => {
    	  	(catalog === undefined || (this.state.catalog.error)) // handles errors present when API request is made with an empty query
    	  	? this.setState({
    	  		catalog: []
    	  	})
    	  	: this.setState((prevState) => ({
	    		catalog
	    	}))
    	})
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		});
		(query !== '')
		? this.updateCatalog(query) // catalog updates with query update
		: this.setState({
			catalog: []
		  });
		// the following ensures that the search suggestion box only shows up when suggestions are present and useful
		(query === '' || query === undefined || this.state.suggestions.length === 0 || this.state.suggestions.includes(query)) && this.setDisplay('none');
	}

	updateCatalog = (query) => {
		BooksAPI.search(query)
    	  .then(catalog => {
    	  	(catalog === undefined || (catalog.error) || query === '')
    	  	/* API error handling - the state only changes when the ajax
    	  	respons is an array else the catalog state is set to default*/
    	  	? this.setState({
    	  		catalog: []
    	  	})
    	  	: this.setState((prevState) => ({
	    		catalog
	    	}))
    	})
	}

	// updates the search suggestion dropdown as the query input changes
	updateSuggestions = (query) => {
		this.updateQuery(query);
		this.setState({
			suggestions: this.terms.filter(term => term.toLowerCase().startsWith(query))
		});
		(query === '')
		? this.setDisplay('none')
		: this.setDisplay()
	}

	setDisplay = (display = '') => {
		this.setState({
			display: display
		})
	}

	render() {
		const { books, updateBooks } = this.props
		return(
			<div className='book-search-feature' onKeyUp={event => (event.keyCode === 13) && this.setDisplay('none')}>
				{/* Search Box */}
				<div className='search-bar'>
					<input
					className='search-books'
					name='search-books'
					type='text'
					placeholder='Search Catalog'
					onChange={event => this.updateSuggestions(event.target.value.toLowerCase())}
					onKeyUp={event => (event.keyCode === 8) && (this.state.query === '' || this.state.query === undefined) ? this.updateQuery('') : this.updateSuggestions(event.target.value.toLowerCase())}					value={this.state.query}
					autoFocus
					/>
					{/* Clear the search box*/}
					<button className='clear-search-button' onClick={event => this.updateQuery('')}>clear</button>
					{/* call the query suggestion component */}
					<QuerySuggestion query={this.state.query} updateQuery={this.updateQuery} display={this.state.display} setDisplay={this.setDisplay} suggestions={this.state.suggestions}/>
				</div>
				{/* Displays the catalog UI */}
				<ListSearch query={this.state.query} catalog={this.state.catalog} updateCatalog={this.updateCatalog} books={books} updateBooks={updateBooks} suggestions={this.suggestions}/>

			</div>
		)
	}
}
export default BookSearchFeature;