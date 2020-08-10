import React from 'react';
import BookItem from './book-item';
import AddBookIcon from './add-book-icon';
import './components.css';
import { Link } from 'react-router-dom';

const BookShelf = (props) => {
	const { shelfName, position, updateBooks, books } = props
	return(
		<div className={`book-shelf ${shelfName} ${position}`}>
			{/* convert shelfName to UI version version */}
			<h4 className='shelf-header'>{((shelfName.includes('currently'))? 'Currently Reading' : (shelfName.includes('want') ? 'Want to Read' : 'Read')).toUpperCase()}</h4>
			<Link to={`/shelf/${shelfName.toLowerCase()}`} className='choose-shelf-button' ></Link> {/* button to toggle between shelves */}
			{/* display the books that belong to the active shelf */}
			{books.map(book => (book.shelf === shelfName && position === 'one') && <BookItem className='book-item' key={(book.id) ? book.id : book.title} book={book} updateBooks={updateBooks}/>)}
			{/* Add book Icon to Current and Want to Red Shelves */}
			<AddBookIcon display={(props.shelfName !== 'read') ? 'flex' : 'none'}/>
		</div>
	)
}

export default BookShelf;