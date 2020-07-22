import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BookDisplay from './components/book-display';



class App extends Component {

componentDidMount(){
	BooksAPI.getAll()
	.then(res => console.log(res));
}

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
