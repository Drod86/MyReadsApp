import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BookDisplay from './components/book-display';


{console.log(BooksAPI.getAll().then(data => {console.log(data)}))}

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(data => {
      this.setState(curState => ({
        books: data
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <BookDisplay />
      </div>
    );
  }
}

export default App;
