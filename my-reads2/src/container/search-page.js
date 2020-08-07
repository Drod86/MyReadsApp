import React from 'react';
import MyReadsHeader from '../components/my-reads-header';
import BookSearchFeature from '../components/book-search-feature';
import Arrow from '../imgs/arrow.png';
import '../App.css';


const SearchPage = (props) => {
	return(
		<div className='search-page'>
			<MyReadsHeader linkName={'Home'} path={'/'} altText={'arrow icon'} imgSrcUrl={Arrow} onNavigate={props.onNavigate}/>
			<BookSearchFeature books={props.books} updateBooks={props.updateBooks}/>
		</div>
	)
}

export default SearchPage;