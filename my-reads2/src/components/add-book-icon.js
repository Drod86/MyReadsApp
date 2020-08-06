import React from 'react';
import './components.css';

const AddBookIcon = (props) => {
	return(
		<div className='add-book-box' style={{ display: `${props.display}`, justifyContent: 'space-around', alignItems: 'center'}}>
			<div className='add-book-circle'>
				<div className='add-book-plus-sign' onClick={event => props.onNavigate('Search')}>+</div>
			</div>
		</div>
	)
}

export default AddBookIcon;