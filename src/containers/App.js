import React, {Component}  from 'react';
import CardList from '../components/CardList';

import {robots} from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import Error from '../components/Error'
import './App.css';



class App extends Component {
    constructor(){
     super()    
        this.state = {
          robots:robots,
          searchField: ''
     } 
    }

   /*
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .than(response => response.json())
        .than(users => {this.setState({robots:users})})
    }
*/

    onSearchChange = (e) =>{
      this.setState({searchField: e.target.value})  
        
    }

    render (){
        const filter = this.state.robots.filter((robot) =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if(this.state.robots.length < 0){
            return<h1>loading</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className="mt3 f1">RoboFriends</h1>
                      <SearchBox onSearchChange={this.onSearchChange} />
                    <Scroll>
                      <Error>
                       <CardList robots={filter} />
                      </Error>
                    </Scroll>
                </div>
   )
  }
 }
}




export default App;