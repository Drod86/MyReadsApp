import React from 'react';
import './components.css';

const QuerySuggestion = (props) => {
	const suggestions = props.terms.filter(term => term.toLowerCase().startsWith(props.query))
	console.log(suggestions.length);
	return(
		<div>
		{ (suggestions.length > 0) &&
			<div className="query-suggestion-box" style={{display: props.display}}>
				{suggestions.map(term => term !== '' && (<li className="suggestion-item" key={term} onClick={event => props.updateQuery(term)} style={{display: props.display}}>{term}</li>))}
			</div>
		}
		</div>
	)
}

export default QuerySuggestion;