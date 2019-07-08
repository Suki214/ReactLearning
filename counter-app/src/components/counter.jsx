import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:1,
        //imageUrl:"https://picsum.photos/200"
        tags:[]
    };

    styles={
        fontSize: 10,
        fontWeight: 'bold'
    };

    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    }

    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    //handleIncrement(){
    handleIncrement=product=>{ //arrow function, do not need to bind to origin object, it's much more simple
        // console.log("Increment Clicked", this.state.count++);
        console.log(product);
        this.setState({count: this.state.count+1})
    };

    doHandleIncrement =()=>{
        this.handleIncrement({id:1});
    };

    handleDecrement=()=>{
        this.setState({count: this.state.count-1})
    }

    render() {  
        return (
            <React.Fragment>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">Decrement</button>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>                
                {this.state.tags.length === 0 && "Please add a tag!"}
                {this.renderTags()}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const{count}= this.state;
        return count === 0 ? <h1>Zero</h1>: count ;
    }
}
 
export default Counter;