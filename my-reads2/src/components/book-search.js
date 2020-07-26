import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import ListSearch from './list-search';

class BookSearch extends Component {
	state={
		query: '',
		catalog: [],
		terms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'],
		display: 'none'
	}

	searchCatalog = (query) => {
    BooksAPI.search(query)
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
	}

	render() {
		return(
			<div>
				<input
				className='search-books'
				type='text'
				placeholder='Search to Add'
				value={this.state.query}
				onChange={event => this.updateQuery(event.target.value)}
				/>

				<button onClick={event => this.clearQuery()}>clear</button>
				<div style={{position: 'relative'}}>
				{this.state.terms.filter(term => term.toLowerCase().startsWith(this.state.query)).map(term => <li key={term} onClick={event => this.updateQuery(term)} style={{listStyleType: 'none', display: this.state.display, zIdex: '2'}}>{term}</li>)}
				</div>
				<ListSearch query={this.state.query} list={this.state.catalog} books={this.props.books}/>
			</div>
		)
	}

}
export default BookSearch;