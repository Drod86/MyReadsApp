import React, {Component} from 'react';
import './components.css';

class DropDownMenu extends Component {
	state = {
		display: 'none',
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

	render() {
		const shelves = ['wantToRead', 'currentlyReading', 'read', 'none']
		const { display } = this.state
		const { updateBooks, book, selectShelf} = this.props
		return(
			<div className='drop-down-menu' >
				<button className='drop-down-button' onClick={event => (display === 'none') ? this.updateDisplay(true) : this.updateDisplay(false)}>shelf</button>
				<div className='drop-down-list-container' style={{display: display}} onClick={event => updateBooks()} >
					<div className='drop-down-close-menu' onClick={event => this.updateDisplay(false)}>x</div>
					{shelves.map(shelf => {
						if (book.shelf === shelf) {
							return <li key={`${shelf}Math.random()`} className='book-drop-down-selected-shelf' onClick={event =>{
								selectShelf(book, shelf);
								this.updateDisplay(false);
							}}>{shelf}</li>
						} else if (book.shelf === undefined && shelf === 'none') {
							return <li className='no-shelf' key={`${shelf}Math.random()`} onClick={event =>{
								selectShelf(this.props.book, shelf);
								this.updateDisplay(false);
							}}>{shelf}</li>
						} else {
							return <li key={`${shelf}Math.random()`} onClick={event =>{
								selectShelf(book, shelf);
								this.updateDisplay(false);
							}}>{shelf}</li>
						}
					})}
				</div>
			</div>
		)
	}

}

export default DropDownMenu;