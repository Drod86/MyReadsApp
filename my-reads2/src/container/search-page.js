import React from 'react';
import MyReadsHeader from '../components/my-reads-header';
import BookSearchFeature from '../components/book-search-feature';
import Arrow from '../imgs/arrow.png';
import '../App.css';

/* Container component holds header with link to home page & book catalog search feature */
const SearchPage = (props) => {
	return(
		<div className='search-page'>
			<MyReadsHeader linkName={'Home'} path={'/'} altText={'arrow icon'} imgSrcUrl={Arrow}/>
			<BookSearchFeature books={props.books} updateBooks={props.updateBooks}/>
		</div>
	)
}

export default SearchPage;