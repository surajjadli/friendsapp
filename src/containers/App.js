  import React, {Component} from 'react';
  import CardList from	'../components/CardList';
  import SearchBox from	'../components/SearchBox';
  import {friends} from '../components/friends';
  import Scroll from '../components/Scroll';
  import ErrorBoundry from '../components/ErrorBoundry';
  import './App.css';

  class App extends Component{
  	constructor() {
  		super()
  		this.state = {
  			friends: [],
  			searchfield:  ''
  		}
  	}

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(reponse => reponse.json())
      .then(users => {this.setState({friends: users})})
    }

  	onSearchChange = (event) => {
      this.setState({ searchfield:event.target.value })
  	}
  	render() {
      const {friends, searchfield} = this.state;
      const filterFriends = friends.filter(friend =>{
        return friend.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return !friends.length ?
       <h1> Hello </h1> :
       (
      <div className="tc">
      <h1 className="f1">Friends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
      <ErrorBoundry>
      <CardList friends={filterFriends}/>
      </ErrorBoundry>
      </Scroll>
      </div>
      );
  	}
  }

  export default App;