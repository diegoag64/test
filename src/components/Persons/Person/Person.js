import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                { this.props.children ? <p>{this.props.children}</p> : null }
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }
}

export default Person;