import React, {Component} from 'react';
import MyReadsHeader from '../components/my-reads-header';
import BookShelf from '../components/book-shelf';
import SearchIcon from '../imgs/magnifying-glass.png';
import '../App.css';

class MainPage extends Component {
	state ={
		active: 'currentlyReading'
	}

	setActive = (shelf) => {
		this.setState((curState) => ({
			active: shelf
		}))
	}

	render(){
		const {books, updateBooks} = this.props
		return(
			<div className='main-page'>
				<MyReadsHeader linkName={'Search'} altText={'Magnifying glass icon'} imgSrcUrl={SearchIcon} onNavigate={this.props.onNavigate}/>
				{this.state.active === 'currentlyReading' && (
					<div className='book-shelves'>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'read'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'three'}/>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'wantToRead'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'two'}/>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'currentlyReading'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'one'}/>
					</div>
				)}
				{this.state.active === 'wantToRead' && (
					<div className='book-shelves'>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'currentlyReading'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'three'}/>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'read'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'two'}/>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'wantToRead'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'one'}/>
					</div>
				)}
				{this.state.active === 'read' && (
					<div className='book-shelves'>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'wantToRead'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'three'}/>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'currentlyReading'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'two'}/>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'read'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'one'}/>
					</div>
				)}

			</div>
		)
	}
}

export default MainPage;