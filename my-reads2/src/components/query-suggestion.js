import React from 'react';
import './components.css';

const QuerySuggestion = (props) => {

	// create array to diplay in query suggestion drop down menu

		return(
			<div>
			{(props.query !== '' || props.query !== ' ') && (props.suggestions.length > 0) &&
				<div className="query-suggestion-box" style={{display: `${props.display}`}}>
					{props.suggestions.map(term => term !== '' && (<li className="suggestion-item" key={term} onClick={event => props.updateQuery(term)} style={{display: props.display}}>{term}</li>))}
				</div>
			}
			</div>
		)

}

export default QuerySuggestion;