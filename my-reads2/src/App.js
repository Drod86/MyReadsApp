import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import './components/components.css';
import MainPage from './container/main-page';
import SearchPage from './container/search-page';
import { Route, Link } from 'react-router-dom';


class App extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  updateBooks = () => {
    BooksAPI.getAll()
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  render() {
    return (
      <div className='my-reads'>
        <div className='pages'>
          {/* React Router Routes: '/' --> landing page with three book shelves*/}
          <Route exact path='/' render={() => (
            <MainPage books={this.state.books} updateBooks={this.updateBooks} />
          )} />
          {/* React Router Route: '/shelf' --> this route holds nested routes to individual shelves to be brought to focus*/}
          <Route path='/shelf' render={() => (
            <MainPage books={this.state.books} updateBooks={this.updateBooks} />
          )} />
          {/* React Router Route: '/search' --> catalog search page */}
          <Route exact path='/search' render={() => (
            <SearchPage books={this.state.books} updateBooks={this.updateBooks} />
          )} />
        </div>
        <footer className='footer'>
          {/* links to bring individual shelves into focus from all pages */}
          <Link to={'/shelf/currentlyreading'} className='footer-link currently'>Currently Reading</Link>
          <Link to={'/shelf/wanttoread'} className='footer-link wantTo'>Want to Read</Link>
          <Link to={'/shelf/read'} className='footer-link _read'>Read</Link>
          {/* Developer info */}
          <div className='footer-info'><p>App Developed by</p><p>Daniel Rodriguez</p><p><a href='https://github.com/Drod86'>github.com/Drod86</a></p></div>
        </footer>
      </div>
  );
  }
}

export default App;
