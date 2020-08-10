import React from 'react';
import { Route } from 'react-router-dom';
import MyReadsHeader from '../components/my-reads-header';
import Shelves from '../components/shelves';
import SearchIcon from '../imgs/magnifying-glass.png';
import '../App.css';


/* Container component holds header with link to search page & Routes to url path specific UI of book shelves) */
const MainPage =(props) => {
		const {books, updateBooks} = props
		const path = ['/', '/shelf/currentlyreading', '/shelf/wanttoread', '/shelf/read']
		return(
			<div className='main-page'>
				{/* header with link to search page*/}
				<MyReadsHeader linkName={'Search Catalog'} altText={'Magnifying glass icon'} imgSrcUrl={SearchIcon} path={'/search'}/>
				{/*Default Display @ '/' */}
				<Route exact path={path[0]} render={() => (
					<Shelves path={path[0]} books={books} updateBooks={updateBooks}/>
				)} />
				{/* displays currently reading shelf*/}
				<Route path={path[1]} render={() => (
					<Shelves path={path[1]} books={books} updateBooks={updateBooks}/>
				)} />
				{/* displays want to read shelf*/}
				<Route path={path[2]} render={() => (
					<Shelves path={path[2]} books={books} updateBooks={updateBooks}/>
				)} />
				{/* displays read shelf*/}
				<Route path={path[3]} render={() => (
					<Shelves path={path[3]} books={books} updateBooks={updateBooks}/>
				)} />
			</div>
		)
}

export default MainPage;