import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 24},
        {name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

 switchNameHandler = (newName) => {
    // console.log('WasClicked')
     this.setState({
         persons: [
             {name: newName, age: 28},
             {name: 'Manuel', age: 26},
             {name: 'Stephanie', age: 32}
         ]
     })
 }

 deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
 }

nameChangeHandler = (event) => {
    this.setState({
        persons: [
            {name: 'Max', age: 28},
            {name: event.target.value, age: 24},
            {name: 'Stephanie', age: 26}
        ]
    })
}

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age}/>
                })}
            </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React !</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button style={style} className="mb-20 mr-20" onClick={() => this.switchNameHandler('Maximillion!!!')}>Switch Name</button>
        <button style={style} className="mb-20 mr-20" onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
         {/* {    ## veya bu kısmı return metodundan önce ekleyebiliriz ###
              this.state.showPersons === true ?
              <div>
                  <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                  <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Savas')} change={this.nameChangeHandler}>My Hobbies: Racing</Person>
                  <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
              </div> :null
          }*/}
      </div>
    );
  }
}

export default App;
