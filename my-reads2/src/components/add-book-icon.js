import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';

const AddBookIcon = (props) => {
	return(
		<Link
			to='/search'
			className='add-book-box'
			style={{ display: `${props.display}`}}
		>
			<div className='add-book-circle'>
				<div className='add-book-plus-sign'>+</div>
			</div>
		</Link>
	)
}

export default AddBookIcon;