import React, {Component} from 'react';

class ShelfChoice extends Component {
	state ={
		drop: false,
		shelf: ''
	}

	componentDidMount() {
		this.props.updateShelf(this.state.shelf)
	}

	updateDrop = (bool) => {
		this.setState(curState => ({
			drop: bool
		}))
	}

	updateShelf = (shelf) => {
		this.setState(curState => ({
			shelf: shelf
		}))
	}

	render() {
		if (this.state.drop) {
			return(
				<div style={{display: 'flex-flow', padding: '0'}} onClick={event => {this.updateDrop(false)}}>
					<p onClick={event => {this.updateShelf('reading')}}>reading</p>
					<p onClick={event => {this.updateShelf('want to read')}}>want to read</p>
					<p onClick={event => {this.updateShelf('read')}}>read</p>
				</div>
			)
		} else {
			return(
				<div style={{display: 'flex-flow', padding: '0'}} onClick={event => {this.updateDrop(true)}}>
					v
				</div>
			)
		}
	}
}

export default ShelfChoice;