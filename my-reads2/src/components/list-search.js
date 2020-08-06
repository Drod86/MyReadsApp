import React, {Component} from 'react';
import BookItem from './book-item';
import './components.css';

class ListSearch extends Component {


	componentDidMount(){
		(this.props.query === '')
		? this.props.updateCatalog()
		: this.props.updateCatalog(this.props.query)
	}

	render(){
	const { query, catalog, books } = this.props

	const renderCatalog = () => {
		const isbns = catalog.map(b => (b.hasOwnProperty('industryIdentifiers')) ? b.industryIdentifiers[0].identifier : b.id).reduce((a,i) => (a.includes(i)) ? a : [...a,...[i]], [])
		const cat = isbns.reduce((acc, isbn) => {
			const B = catalog.filter(b => (b.hasOwnProperty('industryIdentifiers')) ? (b.industryIdentifiers[0].identifier === isbn) : (b.id === isbn))
			const c = B.reduce((a,b) => {
				return (b.hasOwnProperty('industryIdentifiers'))
				? (a.industryIdentifiers[0].identifier === b.industryIdentifiers[0].identifier) && b
				: (a.id === b.id) && b

			}, B[0])
			const shelved = books.filter(b => b.id === c.id)
			return (shelved.length > 0) ? [...acc,...shelved] : [...acc,...[c]]
		}, [])
		return cat;
	}

	const byTitle = query === '' && !catalog.hasOwnProperty('error')
			? renderCatalog()
			: catalog.error
				? [catalog.error]
				: renderCatalog()
	return(
		<div>
			{catalog !== [] && (
				<div className='list-search'>
						{
							byTitle.map(book => {
								return (book !== 'empty query')
								?  (<BookItem key={(book.id) ? book.id : book.title} book={book} updateBooks={this.props.updateBooks}/>)
								:  (query !== '')
									? (<div className='no-query-msg' key={Date.now()}>'No books match your query'</div>)
									: this.props.updateCatalog();
							})
						}
				</div>
			)}
		</div>
	)
}
}

export default ListSearch;