import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard'
import productsData from './components/vschoolProducts'
import Product from './components/Product'
import todosData from './components/todosData'
import Conditional from './components/Conditional'

{/*class App extends Component {
  render() {
    return (
      <div>
         <ContactCard 
          name="Mr.Whiskerson" 
          imgURL="http://placekitten.com/300/200" 
          phone="12345"
          email="Mr.Whikerson@216.com"
        />
        <ContactCard 
          name="Mr.Whiskerson1" 
          imgURL="http://placekitten.com/400/200" 
          phone="123451"
          email="Mr.Whikerson1@216.com"
        />
        <ContactCard 
          name="Mr.Whiskerson2" 
          imgURL="http://placekitten.com/400/300" 
          phone="123452"
          email="Mr.Whikerson2@216.com"
        />
        <ContactCard 
          name="Mr.Whiskerson3" 
          imgURL="http://placekitten.com/200/100" 
          phone="123453"
          email="Mr.Whikerson3@216.com"
        /> */}
        {/* <div className='contact-card'>
          <img src="http://placekitten.com/300/200"/>
          <h3>Mr.Whiskerson</h3>
          <p>Phone: 12345</p>
          <p>Email: Mr.Whikerson@216.com</p>      
        </div>

        <div className='contact-card'>
          <img src="http://placekitten.com/400/200"/>
          <h3>Mr.Whiskerson1</h3>
          <p>Phone: 123451</p>
          <p>Email: Mr.Whikerson1@216.com</p>      
        </div>

        <div className='contact-card'>
          <img src="http://placekitten.com/400/300"/>
          <h3>Mr.Whiskerson2</h3>
          <p>Phone: 123452</p>
          <p>Email: Mr.Whikerson2@216.com</p>      
        </div>         
      </div>
    );
  } 
}*/}
// function App(){
//   const todoItems = todosData.map(item=><TodoItem key={item.id} item={item}/>)

//   return(
//     <div className='todo-list'>
//       {/* <h1>h1. Bootstrap <mark>TOP</mark>heading <small>Secondary text</small></h1>
// <h2>h2. Bootstrap<s>TOP</s> heading <small>Secondary text</small></h2>
// <h3>h3. Bootstrap<del>TOP</del> heading <small>Secondary text</small></h3>
// <h4>h4. Bootstrap heading <small>Secondary text</small></h4>
// <h5>h5. Bootstrap heading <small>Secondary text</small></h5>
// <h6>h6. Bootstrap heading <small>Secondary text</small></h6>
// <p className="text-lowercase">lowercased text.</p>
// <p className="text-uppercase">Uppercased text.</p>
// <p className="text-capitalize">Capitalized text.</p> */}
// {/* <TodoItem />
// <TodoItem/>
// <TodoItem/>
// <TodoItem/> */}
// {todoItems}

//     </div>
//   )
// }
class App extends React.Component{
  
    // constructor(){
    //   super()
    //   this.state={
    //     name:"Suk",
    //     age:18
    //   }
    // }

    //   render() {
    //     return(
    //       <div>
    //         <h1>{this.state.name}</h1>
    //         <h2>{this.state.age} years old!</h2>
    //       </div>
    //     );
    //   }

    // constructor(){
    //   super()
    //   this.state={
    //     count:1
    //   }
    //   this.handleClick=this.handleClick.bind(this)
    // }

    // handleClick(){
    //   this.setState(prevState=>{
    //     return{
    //       count: prevState.count+1
    //     }
    //   });
    // }

    // render(){
    //   return(
    //     <div>
    //       <h1>{this.state.count}</h1>
    //       <button onClick={this.handleClick}>change!</button>
    //     </div>
    //   )
    // }
    // }
    // constructor(){
    //   super()
    //   this.state={
    //     isLoading : true
    //   }
    // }

    // componentDidMount(){
    //   setTimeout(() => {
    //     this.setState({isLoading:false})
    //   }, 1500);      
    // }


    // render(){
    //   return(
    //     <div>
    //       <Conditional isLoading={this.state.isLoading}/>
    //     </div>
    //   )
    // }

    constructor(){
      super()
      this.state={
        isLoggedIn: true,
        character:{}
      }
      this.handleClicked = this.handleClicked.bind(this)
      
    }

    handleClicked(){
      this.setState((prevState)=>{
        return {
          isLoggedIn: !prevState.isLoggedIn
        }
      })
    }

    componentDidMount(){
      fetch("https://swapi.co/api/people/1")
        .then(response=>response.json())
        .then(data=>{
          this.setState({
            character:data
          })
        })
    }

    render(){
      let buttonText = this.state.isLoggedIn? "Log Out": "Log In"
      return(
        <div>
          <button onClick={this.handleClicked}>{buttonText}</button>
          <h1>{this.state.character.name}</h1>
        </div>
      )
    }

}


export default App;
