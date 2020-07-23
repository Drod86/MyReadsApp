import React from 'react';
import MyReadsHeader from '../components/my-reads-header';
import BookSearch from '../components/book-search';

const SearchPage = (props) => {
	return(
		<div>
			<MyReadsHeader linkName={'Home'} altText={'arrow icon'} imgSrcUrl={'arrow.png'} />
			<BookSearch books={props.books}/>
		</div>
	)
}

export default SearchPage;