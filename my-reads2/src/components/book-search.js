import React, {Component} from 'react';

class BookSearch extends Component {
	state={
		query: ''
	}

	updateQuery = (query) => {
		this.setState(curState => ({
			query: query
		}))
	}

	clearQuery = () => {
		this.setState({
			query: ''
		})
	}

	render() {
		const byTitle = this.state.query === ''
			? this.props.books
			: this.props.books.filter((b) => (
				b.title.toLowerCase().includes(this.state.query.toLowerCase())
			))
		const categories = this.props.books.filter(b => b.categories).map(b => b.categories).map(c => c[0].toLowerCase()).filter(c => c === this.state.query.toLowerCase()) ;
		return(
			<div>
			{console.log(categories)}
				<input
				className='search-books'
				type='text'
				placeholder='Search Books'
				value={this.state.query}
				onChange={event => this.updateQuery(event.target.value)}
				/>
				<button onClick={event => this.clearQuery()}>clear</button>
				<div>
				{byTitle.map(book => <p key={book.title} >{book.title}</p>)}
				{categories.map(book => <p key={book.title} >{book.title}</p>)}
				</div>
			</div>
		)
	}

}
export default BookSearch;