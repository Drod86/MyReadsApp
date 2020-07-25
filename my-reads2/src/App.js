import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './container/main-page';
import SearchPage from './container/search-page';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  render() {
    return (
      <div className="my-reads">
        <MainPage />
        <SearchPage books={this.state.books}/>
      </div>
  );
  }
}

export default App;
