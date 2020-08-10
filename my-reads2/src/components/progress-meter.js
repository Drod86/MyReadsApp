import React, {Component} from 'react';
import './components.css';

/*
	This feature is a suggestion.
	I cannot add persistant state without
	access the the API to add user end points.
*/



class ProgressMeter extends Component {
	state = {
		currentPage: 0,
		progress: 0,
		displayM: 'none',
		displayI: 'none',

	}
	// update currentPage state
	setPage = (n) => {
		this.setState({
			currentPage: n
		})
	}


	// instructional message to access page update input
	setDisplayM = () => { // toggles between display
		(this.state.displayM === '')
		? this.setState({
			displayM: 'none'
		  })
		: this.setState({
			displayM: ''
		  })
	}
	// toggles display of current page input
	setDisplayI = () => {
		(this.state.displayI === '')
		? this.setState({
			displayI: 'none'
		  })
		: this.setState({
			displayI: ''
		  })
	}
	// updates the progress state
	updateProgress = (percentage) => {
		this.setState({
			progress: percentage
		})
	}

	render() {
		const percentage = this.state.currentPage/this.props.book.pageCount*100 // calculates the progress
		return(
			<div className='progress-meter-feature' onKeyPress={event => (event.charCode === 13) && this.setDisplayI()}>
				{/* progress meter  */}
				<div
					className='progress-meter'
					style={{backgroundImage: `linear-gradient(to right, rgb(250, 0, 250) ${percentage.toString()}%, white 0%)`}}
					onMouseOver={event => this.setDisplayM()}
					onClick={event => this.setDisplayI()}
				></div>
				{/* instructional diplay message*/}
				<div
					className='progress-meter-msg'
					style={{display: `${this.state.displayM}`}}
					>click to update current page -></div>
				{/*drop down input to enter current page*/}
				<input
					style={{display: `${this.state.displayI}`}}
					className='current-page-input'
					type='text'
					placeholder='pg:'
					onKeyPress={event => (event.charCode === 13) && this.setPage(event.target.value) && this.updateProgress(percentage) && this.setDisplayI()}
				/>
			</div>
		)
	}
}

export default ProgressMeter;