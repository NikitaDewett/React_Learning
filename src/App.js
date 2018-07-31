import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css';


class App extends Component {
  state = {
    persons:[
      {name:'Nik', age: 22,},
      {name: 'Alina', age:21}
    ],
    showPersons: false
  }

  nameChangerHandler = (event)=>{
    this.setState({persons:[
      {name:'Nikita', age: 31,},
      {name: event.target.value, age: 32}
    ]
    })
  }

  togglePersonsHandler = ()=>{
    const show = this.state.showPersons;
    this.setState({showPersons: !show})
  }


  render() {
    const style = {
      font: 'inherit',
      backgroundColor: 'white',
      padding: '8px',
      border: '1px solid, blue',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age = {this.state.persons[0].age} ></Person>
          <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} changed = {this.nameChangerHandler}></Person>
        </div> 
      )
    }

    return (
      <div className="App">
        <button 
          onClick = {this.togglePersonsHandler} 
          style = {style} >Toggle
        </button>

        {persons}
      
      </div>
    );
  }
}

export default App;
