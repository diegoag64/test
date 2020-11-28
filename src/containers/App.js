import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

	constructor(props){
		super(props);
		console.log('[App.js] constructor');
	}

  	state = {
		persons: [
			{ id: 1, name: '아라', age: 20 },
			{ id: 2, name: 'Manu', age: 29 },
			{ id: 3, name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false
	};

	static getDerivedStateFromProps(props, state){
		console.log('[App.js] getDreivedStateFromProps' , props);
		return state;
	}

	componentDidMount(){
		console.log('[App.js] componentDidMount');
	}
	
	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});
		const person = {
			...this.state.persons[personIndex]
		};
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({persons:persons});
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	};

  	render() {
		console.log('[App.js] render');
		let persons = true;
		if(this.state.showPersons){
			persons = (
				<Persons 
				persons={this.state.persons} 
				clicked={this.deletePersonHandler}
				changed={this.nameChangeHandler}
				/>
			)
		}
		return (
			<div className="App">
				<Cockpit 
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
					title={this.props.appTitle}
				/>
				{persons}
				
			</div>
		);
  	}
}

export default App;
