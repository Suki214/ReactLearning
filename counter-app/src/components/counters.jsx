import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
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

    render() { 
        return ( 
        <div>
            {this.state.counters.map(counter=>(
            <Counter 
            key={counter.id} 
            onDelete={this.handleDelete} 
            value={counter.value} 
            id={counter.id}>
            </Counter>
            ))}
        </div> 
        );
    }
}
 
export default Counters;