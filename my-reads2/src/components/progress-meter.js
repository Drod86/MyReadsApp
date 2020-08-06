import React, {Component} from 'react';
import './components.css';

class ProgressMeter extends Component {
	state = {
		currentPage: 0,
		displayM: 'none',
		displayI: 'none'
	}

	setProgress = (n) => {
		this.setState({
			currentPage: n
		})
	}

	setDisplayM = () => {
		(this.state.displayM === '')
		? this.setState({
			displayM: 'none'
		  })
		: this.setState({
			displayM: ''
		  })
	}

	setDisplayI = () => {
		(this.state.displayI === '')
		? this.setState({
			displayI: 'none'
		  })
		: this.setState({
			displayI: ''
		  })
	}

	render() {
		const percentage = this.state.currentPage/this.props.book.pageCount*100
		return(
			<div className="progress-meter-feature" onKeyPress={event => (event.charCode === 13) && this.setDisplayI()}>
				<div
					className='progress-meter'
					style={{backgroundImage: `linear-gradient(to right, rgb(250, 0, 250) ${percentage.toString()}%, white 0%)`}}
					onMouseOver={event => this.setDisplayM()}
					onClick={event => this.setDisplayI()}
				></div>
				<div
					className='progress-meter-msg'
					style={{display: `${this.state.displayM}`}}
					>click to update current page -></div>
				<input
					style={{display: `${this.state.displayI}`}}
					className='current-page-input'
					type='text'
					placeholder='pg:'
					onKeyPress={event => (event.charCode === 13) && this.setProgress(event.target.value) && this.setDisplayI()}
				/>
			</div>
		)
	}
}

export default ProgressMeter;