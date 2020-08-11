import React from 'react';
import BookItem from './book-item';
import './components.css';

const ListSearch = (props) => {
	const { books, catalog, updateCatalog, query } = props

	const upCat = () => {
		if (!catalog.error) {
		// create array of queried books isbns or id, filtering out duplicates
		const isbns = catalog.map(b => (b.hasOwnProperty('industryIdentifiers')) ? b.industryIdentifiers[0].identifier : b.id).reduce((a,i) => (a.includes(i)) ? a : [...a,...[i]], []);
		// create catalog array to display in UI
		const cat = isbns.reduce((acc, isbn) => {
			// produce an array from the catatalog matching the isbns array
			const B = catalog.filter(b => (b.hasOwnProperty('industryIdentifiers')) ? (b.industryIdentifiers[0].identifier === isbn) : (b.id === isbn))
			// isolate current catalog book
			const c = B.reduce((a,b) => {
				return (b.hasOwnProperty('industryIdentifiers'))
				? (a.industryIdentifiers[0].identifier === b.industryIdentifiers[0].identifier) && b
				: (a.id === b.id) && b
			}, B[0]);
			// compare current catalog book with bookshelf books and exchange books already shelved into the UI catalog
			const shelved = books.filter(b => b.id === c.id)
				return (shelved.length > 0) ? [...acc,...shelved] : [...acc,...[c]]
			}, []);
		return cat;
		}
	}

	const newCat = (catalog !== undefined || catalog.length > 0 || !catalog.hasOwnProperty('error')) ? upCat() : updateCatalog() // handling errors that arise from async requests

	return(
		<div className='list-search'>
		{(catalog.length === 0 || catalog.error) // empty queries in API request produce errors -- handling errors produced by empty query or empty array ansyn responses
			? (query === '')
				? <div className='no-query-msg' key={Date.now()}>'Enter a query to update the catalog and search for books!'</div>
				: <div className='no-query-msg' key={Date.now()}>'No books match your query.'</div>
			: newCat.map(book => <BookItem key={(book.id) ? book.id : book.title} book={book} updateBooks={props.updateBooks}/>)
		}
		</div>
	)
}


export default ListSearch;