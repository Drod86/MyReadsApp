import React from 'react';
import MyReadsHeader from '../components/my-reads-header';
import Shelf from '../components/shelf';

const MainPage = (props) => {
	return(
		<div>
			<MyReadsHeader linkName={'Search'} altText={'eyeglass icon'} imgSrcUrl={'eyeglass.png'} />
			<Shelf />
		</div>
	)
}

export default MainPage;