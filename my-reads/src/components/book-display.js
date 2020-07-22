import React, {Component} from 'react';
import ShelfChoice from './ShelfChoice';
import './book-display.css';

class BookDisplay extends Component {
	state = {
		currentPage: 0,
		displayInput: 'none',
		shelf: 'none',
		percent: 0
	}

	componentDidMount() {
		this.props.updateProgress(this.state.percent);
		this.props.updateShelf(this.state.shelf);
	}

	updateCurPage = (page) => {
		this.setState((curState) => ({
			currentPage: page
		}))
	}

	updateDisplay = (display) => {
		this.setState({
			displayInput: display
		})
	}

	updatePercent = (percent) => {
		this.setState({
			percent: percent
		})
	}

	updateShelf = (shelf) => {
		this.setState(curState => ({
			shelf: shelf
		}))
	}

	render() {
		const percent = (this.state.currentPage/this.props.book.pages*100).toFixed(2)
		return(
			<div className='book-display'>
			<div onClick={event => this.updateDisplay('')}>
			{`${percent}%`}
			<input
				type='text'
				onChange={event => this.updateCurPage(event.target.value)}
				onKeyPress={event => {
					if (event.charCode === 13) {
					this.updateDisplay('none');
					this.updatePercent(percent);
					}
				}}
				style={{display: this.state.displayInput}}
			/>
			</div>
			<h3>{this.props.book.title}</h3>
			<img alt={this.props.book.title} src={this.props.book.url} />
			<h3>{this.props.book.author}</h3>
				<ShelfChoice updateShelf={this.updateShelf}/>
			</div>
		)
	}
}

export default BookDisplay;
