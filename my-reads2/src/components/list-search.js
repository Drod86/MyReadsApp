import React from 'react';
import BookItem from './book-item';
import './components.css';

const ListSearch = (props) => {
	const { query, catalog, books } = props

	const renderCatalog = () => {
		// create array of queried books isbns or id, filtering out duplicates
		const isbns = catalog.map(b => (b.hasOwnProperty('industryIdentifiers')) ? b.industryIdentifiers[0].identifier : b.id).reduce((a,i) => (a.includes(i)) ? a : [...a,...[i]], [])
		// create catalog array to display in UI
		const cat = isbns.reduce((acc, isbn) => {
			// produce an array from the catatalog matching the isbns array
			const B = catalog.filter(b => (b.hasOwnProperty('industryIdentifiers')) ? (b.industryIdentifiers[0].identifier === isbn) : (b.id === isbn))
			// isolate current catalog book
			const c = B.reduce((a,b) => {
				return (b.hasOwnProperty('industryIdentifiers'))
				? (a.industryIdentifiers[0].identifier === b.industryIdentifiers[0].identifier) && b
				: (a.id === b.id) && b
			}, B[0])
			// compare current catalog book with bookshelf books and exchange books already shelved into the UI catalog
			const shelved = books.filter(b => b.id === c.id)
				return (shelved.length > 0) ? [...acc,...shelved] : [...acc,...[c]]
			}, [])
		return cat;
	}
	// fill queried array or handle error/empty arrays
	const byTitle = query === '' && !catalog.hasOwnProperty('error')
			? renderCatalog()
			: catalog.error
				? [catalog.error]
				: renderCatalog()
	return(
		<div>
			{catalog !== [] && ( // displays when the catalog is not empty
				<div className='list-search'>
						{	// map produced catalog and produce UI
							byTitle.map(book => {
								return (book !== 'empty query')
								?  (<BookItem key={(book.id) ? book.id : book.title} book={book} updateBooks={props.updateBooks}/>)
								:  (query !== '')
									? (<div className='no-query-msg' key={Date.now()}>"No books match your query"</div>)
									: props.updateCatalog();
							})
						}
				</div>
			)}
		</div>
	)
}


export default ListSearch;