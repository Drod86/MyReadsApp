import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';

const MyReadsHeader = (props) => {
	return(
		<div className='my-reads-header'>
			<Link to={'/'} className="app-heading"><h1>MyReads</h1></Link>
			<Link
				to={props.path}
				className='nav-link'
			>
					{props.linkName}
					<span className='nav-img-shell'>
					<img className='nav-img' alt={props.altText} src={props.imgSrcUrl}/>
					</span>
			</Link>
		</div>
	)
}

export default MyReadsHeader;