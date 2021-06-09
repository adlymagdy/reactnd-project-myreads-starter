import React, {Component} from "react"
import Shelf from "./Shelf"
import SearchButton from './SearchButton'

export default class Shelves extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading"/>
          <Shelf title="Want to read"/>
          <Shelf title="Read"/>
        </div>
        <SearchButton/>
      </div>
      )
  }
}