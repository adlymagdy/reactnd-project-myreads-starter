import React, {Component} from "react"
import Book from './Book'
import { getAll } from "./BooksAPI"

export default class Shelf extends Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      console.log(books)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          <Book/>
          </ol>
        </div>
        </div>
        )
  }
}