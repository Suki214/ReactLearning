import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {  
    render() { 
        return ( 
        <div>
            <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m2">Reset</button> 
            {this.props.counters.map(counter=>(
            <Counter 
            key={counter.id} 
            onDelete={this.props.handleDelete} 
            onIncrement ={this.props.handleIncrement}
            onDecrement ={this.props.handleDecrement}
            counter={counter}
            />
            ))}
        </div> 
        );
    }
}
 
export default Counters;