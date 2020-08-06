import React, {Component} from 'react';
import './components.css';



class DropDownMenu extends Component {
	state = {
		display: 'none',
		shelves: ['wantToRead', 'currentlyReading', 'read', 'none'],
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
		return(
			<div className='drop-down-menu'>
				<button className='drop-down-button' onClick={event => (this.state.display === 'none') ? this.updateDisplay(true) : this.updateDisplay(false)}>shelf</button>
				<div className='drop-down-list-container' style={{display: this.state.display}} onClick={event => this.props.updateBooks()}>
					{this.state.shelves.map(shelf => {
						if (this.props.book.shelf === shelf) {
							return <li key={`${shelf}Math.random()`} className='book-drop-down-selected-shelf' onClick={event =>{
								this.props.selectShelf(this.props.book, shelf);
								this.updateDisplay(false);
							}}>{shelf}</li>
						} else if (this.props.book.shelf === undefined && shelf === 'none') {
							return <li className='no-shelf' key={`${shelf}Math.random()`} onClick={event =>{
								this.props.selectShelf(this.props.book, shelf);
								this.updateDisplay(false);
							}}>{shelf}</li>
						} else {
							return <li key={`${shelf}Math.random()`} onClick={event =>{
								this.props.selectShelf(this.props.book, shelf);
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