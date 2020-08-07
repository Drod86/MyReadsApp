import React, {Component} from 'react';
import MyReadsHeader from '../components/my-reads-header';
import BookShelf from '../components/book-shelf';
import SearchIcon from '../imgs/magnifying-glass.png';
import '../App.css';
import { Route } from 'react-router-dom';

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
				<MyReadsHeader linkName={'Search Catalog'} altText={'Magnifying glass icon'} imgSrcUrl={SearchIcon} path={'/search'}/>
				<Route exact path={'/'} render={() => (
					<div className='book-shelves'>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'read'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'three'}/>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'wantToRead'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'two'}/>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'currentlyReading'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'one'}/>
					</div>
				)} />
				<Route path={'/shelf/currentlyreading'} render={() => (
					<div className='book-shelves'>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'read'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'three'}/>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'wantToRead'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'two'}/>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'currentlyReading'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'one'}/>
					</div>
				)} />
				<Route path={'/shelf/wanttoread'} render={() => (
					<div className='book-shelves'>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'currentlyReading'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'three'}/>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'read'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'two'}/>
						<BookShelf books={this.props.books} updateBooks={updateBooks} shelfName={'wantToRead'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'one'}/>
					</div>
				)} />
				<Route path={'/shelf/read'} render={() => (
					<div className='book-shelves'>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'wantToRead'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'three'}/>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'currentlyReading'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'two'}/>
						<BookShelf books={books} updateBooks={updateBooks} shelfName={'read'} setActive={this.setActive} onNavigate={this.props.onNavigate} position={'one'}/>
					</div>
				)} />

			</div>
		)
	}
}

export default MainPage;