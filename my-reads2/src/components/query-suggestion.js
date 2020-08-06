import React from 'react';
import './components.css';

const QuerySuggestion = (props) => {
	return(
		<div className="query-suggestion-box">
			{props.terms.filter(term => term.toLowerCase().startsWith(props.query)).map(term => term !== '' && (<li className="suggestion-item" key={term} onClick={event => props.updateQuery(term)} style={{display: props.display}}>{term}</li>))}
		</div>
	)
}

export default QuerySuggestion;