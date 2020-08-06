import React from 'react';
import './components.css';

const MyReadsHeader = (props) => {
	return(
		<div className='my-reads-header'>
			<h1 className="app-heading">MyReads</h1>
			<div className='nav-link' onClick={(event) => props.onNavigate(props.linkName)}>
				{props.linkName}
				<span className='nav-img-shell'>
				<img className='nav-img' alt={props.altText} src={props.imgSrcUrl}/>
				</span>
			</div>
		</div>
	)
}

export default MyReadsHeader;