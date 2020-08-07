import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import ListSearch from './list-search';
import QuerySuggestion from './query-suggestion';
import './components.css';

class BookSearchFeature extends Component {
	state={
		query: '',
		catalog: [],
		terms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'],
		display: 'none'
	}

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
		this.setState(curState => ({
			query: query
		}))
		if (query !== '') {
			BooksAPI.search(query)
	    	.then(catalog => {
		    	this.setState((prevState) => ({
		    		catalog
		    	}))
	    	})
	    	this.setState({
	    		display: ''
	    	})
    	} else {
    		this.updateCatalog();
    		this.setState({
    			display: 'none'
    		})
    	}

	}

	clearQuery = () => {
		this.setState({
			query: ''
		})
		this.setState({
    			display: 'none'
    		})
		this.updateCatalog();

	}

	updateCatalog = (query = 'a') => {
		BooksAPI.search(query)
	    	.then(catalog => {
		    	this.setState((prevState) => ({
		    		catalog
		    	}))
	    	})
	}

	render() {
		return(
			<div className='book-search-feature'>
				<div className='search-bar'>
					<input
					className='search-books'
					type='text'
					placeholder='Search Catalog to Add Books to Shelves'
					value={this.state.query}
					onChange={event => this.updateQuery(event.target.value.toLowerCase())}
					onKeyPress={event => (event.keyCode === 8) && this.updateCatalog(event.target.value.toLowerCase())}
					/>
					<button className='clear-search-button' onClick={event => this.clearQuery()}>clear</button>
					{this.state.query !== '' && !this.state.terms.includes(this.state.query) && !this.state.catalog.error && (
					<QuerySuggestion terms={this.state.terms} query={this.state.query} display={this.state.display} updateQuery={this.updateQuery}/>
					)}
				</div>
				<ListSearch query={this.state.query} catalog={this.state.catalog} updateCatalog={this.updateCatalog} books={this.props.books} updateBooks={this.props.updateBooks}/>
			</div>
		)
	}

}
export default BookSearchFeature;