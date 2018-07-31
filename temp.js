import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';



class App extends Component {
  state = {
    persons:[
      {id: 1, name:'Nik', age: 22,},
      {id: 2, name: 'Alina', age:21}
    ]
  }
   clickHandler = (newName) =>{
    this.setState({persons:[
    {name:'Nikita', age: 31,},
    {name: newName, age: 32}
  ]
  })
}

nameChangerHandler = (id, event)=>{
  this.setState({
    persons: this.state.persons.filter(person => person.id !== id)
      .concat({
        ...this.state.persons.find(person => person.id === id),
        name: event.target.value
      })
  })
}

renderPersons = () => this.state.persons.map(person => {
  const { name, age } = person
  return (
    <Person
      name={name}
      age={age}
      changed={this.nameChangerHandler}
    />
  )
})

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick = {this.clickHandler.bind(this, 'Alina')}>Switch Name</button>
        {this.renderPersons()}
      </div>
    );
  }
}

export default App;
