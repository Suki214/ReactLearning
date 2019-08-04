import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      firstName:"",
      lastName:"",
      isFriendly:true,
      gender: "",
      favColor:"blue"
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    const{name, value, type,checked}= event.target
    type==="checkbox"? this.setState({[name]:checked}):this.setState({[name]: value})
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
          <br/>
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
          <h1>{this.state.firstName} {this.state.lastName}</h1>
          <br/>
          <textarea placeholder="Some default value" onChange={this.handleChange}></textarea>
          <br/>
          <input type="checkbox" name="IsFriendly" checked={this.state.isFriendly} onChange={this.handleChange}></input>Is Friendly?
          <br/>
          <label>
          <input type="radio" value="gender" name="male" checked={this.state.gender==="male"} onChange={this.handleChange}></input>Male
          </label>            
          <br/>
          <label>
          <input type="radio" value="gender" name="female" checked={this.state.gender="female"} onChange={this.handleChange}></input>Female
          </label> 
          <br/>
          <select
            value={this.state.favColor} name="favColor" onChange={this.handleChange}>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>           
          <br/>
          <h2>you are a {this.state.gender}</h2>
          <br/>
          <h2>your favorite is {this.state.favColor} </h2>
        </form>
      </div>
    );
  }
}

export default App;
