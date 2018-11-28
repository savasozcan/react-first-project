import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 24},
        {name: 'Stephanie', age: 26}
    ]
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

nameChangeHandler = (event) => {
    this.setState({
        persons: [
            {name: 'Max', age: 28},
            {name: event.target.value, age: 24},
            {name: 'Stephanie', age: 26}
        ]
    })
}

  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React !</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button style={style} className="mb-20" onClick={() => this.switchNameHandler('Maximillion!!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Savas')} change={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
