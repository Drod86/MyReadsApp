import React from 'react';

const MyReadsHeader = (props) => {
	return(
		<div className='my-reads-header'>
			<h1>MyReads</h1>
			<a href="/search">
				{props.linkName}
				<img alt={props.altText} src={props.imgSrcUrl} />
			</a>
		</
		div>
	)
}

export default MyReadsHeader;