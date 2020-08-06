import React from 'react';
import BookItem from './book-item';
import AddBookIcon from './add-book-icon';
import './components.css';

const BookShelf = (props) => {
	return(
		<div className={`book-shelf ${props.shelfName} ${props.position}`}>
			<h4 className='shelf-header'>{((props.shelfName.includes('currently'))? 'Currently Reading' : (props.shelfName.includes('want') ? 'Want to Read' : 'Read')).toUpperCase()}</h4>
			<button className='choose-shelf-button' onClick={(event) => props.setActive(props.shelfName)}> </button>
			{props.books.map(book => (book.shelf === props.shelfName && props.position === 'one') && <BookItem className='book-item' key={(book.id) ? book.id : book.title} book={book} updateBooks={props.updateBooks}/>)}
			<AddBookIcon display={(props.shelfName !== 'read') ? 'flex' : 'none'} onNavigate={props.onNavigate}/>

		</div>
	)
}

export default BookShelf;