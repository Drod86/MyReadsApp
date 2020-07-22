import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BookDisplay from './components/book-display';



class App extends Component {
	state = {
		books: [
			{
				title: 'T1',
				author: 'A1',
				url: 'url1',
				shelf: 'none',
				pages: 480,
				progress: 0,
			},
			{
				title: 'T2',
				author: 'A2',
				url: 'url2',
				shelf: 'none',
				pages: 480,
				progress: 0,
			},
			{
				title: 'T3',
				author: 'A3',
				url: 'url3',
				shelf: 'none',
				pages: 480,
				progress: 0,
			},
			{
				title: 'T4',
				author: 'A4',
				url: 'url4',
				shelf: 'none',
				pages: 480,
				progress: 0,
			},
			{
				title: 'T5',
				author: 'A5',
				url: 'url5',
				shelf: 'none',
				pages: 480,
				progress: 0,
			}
		]
	}

	updateProgress = (percent) => {
		this.setState((curState) => ({
			progress: percent
		}))
	}

	updateShelf = (shelf) => {
		this.setState((curState) => ({
			shelf: shelf
		}))
	}

  render() {
    return (
      <div className="App">
      <div className="books-display">
      {this.state.books.map(book => {
		return <BookDisplay key={book.title} book={book} updateProgress={this.updateProgress} updateShelf={this.updateShelf}/>
      })}
      </div>
      </div>
    );
  }
}

export default App;
