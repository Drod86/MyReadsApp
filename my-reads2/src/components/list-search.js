import React from 'react';
import BookItem from './book-item';

const ListSearch = (props) => {
	const { query, list, books } = props

	const byTitle = query === '' || list === undefined
			? books
			: list.error
				? [list.error]
				: list

	return(
		<div className='book-search' style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
				{
					byTitle.map(book => {
						return (book !== 'empty query')
						?  (<BookItem key={(book.id) ? book.id : list.error} book={book} />)
						:  (<div className='no-query-msg' key={Date.now()}>'No books match your query'</div>)
					})
				}
		</div>
	)
}

export default ListSearch;