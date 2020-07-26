import React, {Component} from 'react';

class BookItem extends Component {
	state = {
		display: 'none',
		shelves: ['wantToRead', 'currentlyReading', 'read'],
		shelf: ''
	}

	updateDisplay = (bool) => {
		bool
		? this.setState({
			display: ''
		  })
		: this.setState({
			display: 'none'
		  })
	}

	selectShelf = (shelf) => {
		this.setState({
			shelf: shelf
		})
	}

	render() {
		const book = this.props.book
		return(
			<div>
				<div  style={{width: '100px'}}>
					<h4 className='book-title'>{book.title}</h4>
					<img className='book-img' alt={book.title} src={(book.imageLinks) ? book.imageLinks.smallThumbnail : ''} style={{width: '100%'}}/>
					<h5>{(book.authors) ? book.authors.map(author => <span key={author} >{author}, </span>) : <span>'author not available'</span>}</h5>
				</div>
				<p style={{display: !this.state.display}} onClick={event => (this.state.display === 'none') ? this.updateDisplay(true) : this.updateDisplay(false)}>v</p>
				<div style={{listStyleType: 'none', listStylePosition: 'outside', display: this.state.display}}>
					{this.state.shelves.map(shelf => <li>{shelf}</li>)}
					<li>{book.shelf}</li>
				</div>
			</div>
		)
	}
}

export default BookItem;