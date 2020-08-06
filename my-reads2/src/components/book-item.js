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
		const book = this.props.book
		const shelf = this.state.shelf
		return(
			<div className='book-item-shell'>
				<div className='book-item'>
					{(shelf === 'currentlyReading') && <ProgressMeter book={this.props.book}/>}
					<img className='book-img' alt={book.title} src={(book.imageLinks) ? book.imageLinks.smallThumbnail : ''}/>
					<h4 className='book-title'>{book.title}</h4>
					<h5 className='book-author'>{'Author:'}<br/>{(book.authors) ? book.authors.map(author => <span key={author} >{author},<br/></span>) : <span>'author not available'</span>}</h5>
					{this.props.book.description !== undefined && (
						<div>
							<p className='book-description-short'>{
								book.description.split('').reduce((acc, l) => {return (acc.length < 100) ? [...acc, ...[l]] : [...acc]}, [])}...
								<span className='bold underline' onClick={event => this.setDisplay()}>more</span>
							</p>
							<p className='book-description-long' style={{display: `${this.state.displayLong}`}} onClick={event => this.setDisplay()}>
								{book.description}...
								<span className='bold underline'>hide</span>
							</p>
						</div>
					)}
					{this.props.book.description === undefined && (
						<p className='book-description-short'>No Description available</p>
					)}
					<DropDownMenu book={book} selectShelf={this.selectShelf} updateBooks={this.props.updateBooks}/>
				</div>
			</div>
		)
	}
}

export default BookItem;