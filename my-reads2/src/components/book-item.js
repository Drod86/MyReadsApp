import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import DropDownMenu from './drop-down-menu';
import ProgressMeter from './progress-meter';
import './components.css';

class BookItem extends Component {
	state = {
		shelf: '',
		displayShort: '',
		displayLong: 'none'
	}

	componentDidMount(){
		this.setState({
			shelf: this.props.book.shelf
		});
	}

	selectShelf = (book, shelf) => {
		this.setState({
			shelf: shelf
		})
		BooksAPI.update(book, shelf);
		this.props.updateBooks();
	}

	setDisplay = () => {
		(this.state.displayShort === '')
		? this.setState({
			displayShort: 'none',
			displayLong: ''
		  })
		: this.setState({
			displayShort: '',
			displayLong: 'none'
		  })
	}

	render() {
		const { book, updateBooks } = this.props
		const { shelf, displayLong } = this.state
		return(
			<div className='book-item-shell'>
				<div className='book-item'>
					{(shelf === 'currentlyReading') && <ProgressMeter book={book}/> /* if the book is on the currently reading shelf it will have a progress bar*/}
					<img className='book-img' alt={book.title} src={(book.imageLinks) ? book.imageLinks.smallThumbnail : '' /*Book Image*/}/>
					<h4 className='book-title'>{book.title}</h4>
					{/* if there are multiple authors map through and display all */}
					<h5 className='book-author'>{'Author:'}<br/>{(book.authors) ? book.authors.map(author => <span key={author} >{author},<br/></span>) : <span>'author not available'</span>}</h5>
					{book.description !== undefined && (
						<div>
							{/* short description with an option to see more */}
							<p className='book-description-short'>{
								book.description.split('').reduce((acc, l) => {return (acc.length < 100) ? [...acc, ...[l]] : [...acc]}, [])}...
								<span className='bold underline' onClick={event => this.setDisplay()}>more</span>
							</p>
							{/* Long description pop up window */}
							<p className='book-description-long' style={{display: `${displayLong}`}} onClick={event => this.setDisplay()}>
								{book.description}...
								<span className='bold underline'>hide</span>
							</p>
						</div>
					)}
					{book.description === undefined && ( //if no description is available then this message will display
						<p className='book-description-short'>No Description available</p>
					)}

					{/* shelf choice drop down */}
					<DropDownMenu book={book} selectShelf={this.selectShelf} updateBooks={updateBooks}/>
				</div>
			</div>
		)
	}
}

export default BookItem;