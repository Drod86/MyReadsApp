import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';

class BookSearch extends Component {
	state={
		query: '',
		catalog: []
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
		BooksAPI.search(query)
    .then(catalog => {
    	this.setState((prevState) => ({
    		catalog
    	}))
    })
	}

	clearQuery = () => {
		this.setState({
			query: ''
		})
	}

	render() {
		const byTitle = this.state.query === '' || this.state.catalog === undefined
			? this.props.books
			: this.state.catalog.error ? [this.state.catalog.error] : this.state.catalog
		return(
			<div>
			{console.log(this.state.catalog)}
				<input
				className='search-books'
				type='text'
				placeholder='Search Books'
				value={this.state.query}
				onChange={event => this.updateQuery(event.target.value)}
				/>
				<button onClick={event => this.clearQuery()}>clear</button>
				<div className='book-search' style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
				{
					byTitle.map(book => {
						return (book !== 'empty query')
						?  (
							<div key={(book.id) ? book.id : this.state.catalog.error} style={{width: '100px'}}>
							{console.log(book)}
								<p>{book.title}</p>
								<img alt={book.title} src={(book.imageLinks) ? book.imageLinks.smallThumbnail : ''} />
							</div>
						   )
						:  (<div>'No books match your query'</div>)
					})
				}
				</div>
			</div>
		)
	}

}
export default BookSearch;