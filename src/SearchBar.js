import React, { Component } from 'react';
import { Venues } from './Venues';
import App from './App'

class SearchBar extends Component {

constructor(props) {
  super(props)

  this.state = {value: ''}
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

handleSubmit(event) {
  event.preventDefault()
  this.props.onSubmit(this.state.value)
}

handleChange(event) {
  this.setState({value: event.target.value})
}

  render() {

    let toggleSearchBar = this.props.sidebarOpen ? "block" : "none";
    let {classes} = this.props
    //console.log(this.props)

    return (
      <div className="options-box">
      <div className="markers-title">Search for nearby places</div>
      <input
        id="places-search"
        type="text"
        /*on change the event listener invokes filterVenues, then calls setState*/
        onChange={this.handleChange} value={this.state.query}
        placeholder="Type name of fav coffee place"
/*below the value will be the state of what the user wrote*/
        />
        <input id="go-places" type="button" value="Go" />
      </div>
    );
  }
}

export default SearchBar;
