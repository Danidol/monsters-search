import "./App.css"
import React, { Component } from "react"
import { CardList } from "./components/card-list/card-list"
import { SearchBox } from "./components/search-box/search-box"
import { Footer } from "./components/footer/footer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((name) => this.setState({ monsters: name }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Search</h1>
        <SearchBox placeholder="search monsters..." handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
        <Footer />
      </div>
    )
  }
}

export default App
