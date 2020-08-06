import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import './components/components.css';
import MainPage from './container/main-page';
import SearchPage from './container/search-page';

class App extends Component {
  state = {
    books: [],
    screen: 'Home'
  }

  componentDidMount() {
    this.updateBooks()
  }

  updateBooks = () => {
    BooksAPI.getAll()
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  onNavigate = (url) => {
    this.setState((curState) => ({
      screen: url
    }))
  }

  render() {
    return (
      <div className="my-reads">
        <div className="content">
        {this.state.screen === 'Home' && (
          <MainPage books={this.state.books} updateBooks={this.updateBooks} onNavigate={this.onNavigate}/>
        )}
        {this.state.screen === 'Search' && (
          <SearchPage books={this.state.books} updateBooks={this.updateBooks} onNavigate={this.onNavigate}/>
        )}
        </div>
        <footer className='footer'>
          <p className="footer-link currently">Currently Reading</p>
          <p className="footer-link wantTo">Want to Read</p>
          <p className="footer-link _read">Read</p>
          <div className="footer-info"><p>App Developed by</p><p>Daniel Rodriguez</p><p><a href='https://github.com/Drod86'>github.com/Drod86</a></p></div>
        </footer>
      </div>
  );
  }
}

export default App;
