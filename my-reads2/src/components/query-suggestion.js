import React from 'react';
import './components.css';

const QuerySuggestion = (props) => {
	// create array to diplay in query suggestion drop down menu
	const suggestions = props.terms.filter(term => term.toLowerCase().startsWith(props.query))
	return(
		<div>
			{(suggestions.length > 0) && // suggestion box only displays when suggestions array is not empty
				<div className="query-suggestion-box" style={{display: props.display}}>
					{suggestions.map(term => term !== '' && (<li className="suggestion-item" key={term} onClick={event => props.updateQuery(term)} style={{display: props.display}}>{term}</li>))}
				</div>
			}
		</div>
	)
}

export default QuerySuggestion;