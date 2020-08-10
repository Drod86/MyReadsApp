import React from 'react';
import BookShelf from './book-shelf';
import '../App.css';

const Shelves = (props) => {
	const shelves = [{name: 'read'}, {name: 'wantToRead'}, {name: 'currentlyReading'}];
	const positions = [{position: 'three'}, {position: 'two'}, {position: 'one'}];
	const { path, books, updateBooks } = props

	// produces an array of objects - shelves with the same provided (p) position
	const sByP = (p) => { return shelves.reduce((a, s) => { return [...a,...[{...s,...positions[p]}]]}, [] )}
	// produces an array of objects - shelves at the proveded desired positions b = bottom layer, c = center layer, f = front layer
	const shelfOrder = (b, c, f) => { return [sByP(0)[b], sByP(1)[c], sByP(2)[f]] }
	// recieves the urlpath as a param and returns which shelf order will appear on the UI
	const active = (path) => {
		switch (path) {
			case '/shelf/wanttoread':
				return shelfOrder(2, 0, 1);


			case '/shelf/read':
				return shelfOrder(1, 2, 0);


			default:
				return shelfOrder(0, 1, 2);
		}
	}
	// passess bookshelf object name and position values to BookShelf component
	const displayShelf = (name, position) => {
		return <BookShelf key={name} books={books} updateBooks={updateBooks} shelfName={name}  position={position}/>
	}
	// receives active book shelves array and passes as param to map and call BookShelf UI display fuction
	const shelfList = (active) => { return active.map(obj => {return displayShelf(obj.name, obj.position)})}

	return(
		<div className='book-shelves'>
		{/*Call list of Shelf Component in the order by path param*/}
		{shelfList(active(path))}
		</div>
	)
}

export default Shelves;