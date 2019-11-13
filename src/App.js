import React,{Component} from 'react';
import {Cardlist} from './Component/Card-list/Cardlist.component'
//import logo from './logo.svg';
import './App.css'
import {SearchBox} from './Component/searchbox/SearchBox.component'

class App extends Component{
constructor () {
  super()
    this.state = {
      monsters:[],
      searchField:''
    }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users})); 
}

handleChange = (e) => {
  this.setState({searchField : e.target.value})
}

render (){
  
  const {monsters,searchField} = this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className='App' >
    <h1>Monster Rolodex</h1>
       {/* <input type='search'
         placeholder='search monster'
         onChange={e => {  this.setState({searchField : e.target.value} ) }}/> */}
        
        <SearchBox
            placeholder='search monster'
            handleChange={this.handleChange}
        />

        <Cardlist monsters={filteredMonsters}/>
     </div>
  );
}
}

export default App;
