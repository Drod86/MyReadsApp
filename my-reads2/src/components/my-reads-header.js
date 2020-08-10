import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';

const MyReadsHeader = (props) => {
	return(
		<div className='my-reads-header'>
			<Link to={'/'} className='app-heading'><h1>MyReads</h1></Link> {/*MyReads heading links to home page*/}
			{/*path toggles depending on the page that it is currently on - path passed as props*/}
			<Link
				to={props.path}
				className='nav-link'
			>
					{props.linkName} {/*UI link text*/}
					<span className='nav-img-shell'>
					<img className='nav-img' alt={props.altText} src={props.imgSrcUrl}/> {/*link Icon*/}
					</span>
			</Link>
		</div>
	)
}

export default MyReadsHeader;