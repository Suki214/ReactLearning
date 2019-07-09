import React, { Component } from 'react';
import NavBar from './components/navbar'
//import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters:[
        {id:1, value:2},
        {id:2, value:0},
        {id:3, value:3},
        {id:4, value:1}
    ]
 }

 handleDelete = counterID=>{
     //console.log("event handle delete called", counterID);
     const counters=this.state.counters.filter(c=>c.id!==counterID);
     this.setState({counters});
 }

 handleReset=()=>{
     const counters = this.state.counters.map(c=>{
         c.value=0;
         return c;
     });
     this.setState({counters});
 };

 handleIncrement = counter=>{
    //this.setState(this.counter.id +1);
    //console.log({counter});
    const counters =[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    //console.log(this.state.counters[index]);
    this.setState({counters});
 };

 handleDecrement= counter=>{
     const counters =[...this.state.counters];
     const index=counters.indexOf(counter);
     counters[index]={...counter};
     counters[index].value--;
     this.setState({counters});
 }
 
  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <main className="container">
        <Counters/>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
