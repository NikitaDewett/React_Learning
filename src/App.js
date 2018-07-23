import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css';


class App extends Component {
  state = {
    persons:[
      {name:'Nik', age: 22,},
      {name: 'Alina', age:21}
    ]
  }
   clickHandler = (newName) =>{
    this.setState({persons:[
    {name:'Nikita', age: 31,},
    {name: newName, age: 32}
  ]
  })
}

nameChangerHandler = (event)=>{
  this.setState({persons:[
    {name:'Nik ', age: 31,},
    {name: event.target.value, age: 32}
  ]
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick = {this.clickHandler.bind(this, 'Alina')}>Switch Name</button>
        <Person click = {this.clickHandler.bind(this, 'Alina')} name={this.state.persons[0].name} age = {this.state.persons[0].age} ></Person>
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} changed = {this.nameChangerHandler}></Person>
      </div>
    );
  }
}

export default App;
