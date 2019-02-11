import React, { Component } from 'react';
import App from './App'

class SideBar extends Component {

state = {
  query: ""
}

render() {

return (

<div className="options-box">
<div className="markers-title">Search for nearby places</div>
<form>
<input
    id="places-search"
    role="search"
    type="text"
    placeholder="Type name of fav coffee place"
    /*below the value will be the state of what the user wrote*/
    value={this.props.query}
    /*on change the event listener invokes filterVenues, then calls setState*/
    onChange={(event) => this.props.filterVenues(event.target.value)}
    />
    <input className="submit-button" type="submit" value="Submit" />
    </form>
    </div>
    );
  }
}
export default SideBar;
