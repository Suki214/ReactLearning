import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       firstName:"",
//       lastName:"",
//       isFriendly:true,
//       gender: "",
//       favColor:"blue"
//     }
//     this.handleChange=this.handleChange.bind(this);
//   }

//   handleChange(event){
//     const{name, value, type,checked}= event.target
//     type==="checkbox"? this.setState({[name]:checked}):this.setState({[name]: value})
//   }

//   render() {
//     return (
//       <div className="App">
//         <form>
//           <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
//           <br/>
//           <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
//           <h1>{this.state.firstName} {this.state.lastName}</h1>
//           <br/>
//           <textarea placeholder="Some default value" onChange={this.handleChange}></textarea>
//           <br/>
//           <input type="checkbox" name="IsFriendly" checked={this.state.isFriendly} onChange={this.handleChange}></input>Is Friendly?
//           <br/>
//           <label>
//           <input type="radio" value="gender" name="male" checked={this.state.gender==="male"} onChange={this.handleChange}></input>Male
//           </label>            
//           <br/>
//           <label>
//           <input type="radio" value="gender" name="female" checked={this.state.gender="female"} onChange={this.handleChange}></input>Female
//           </label> 
//           <br/>
//           <select
//             value={this.state.favColor} name="favColor" onChange={this.handleChange}>
//             <option value="blue">Blue</option>
//             <option value="red">Red</option>
//             <option value="green">Green</option>
//           </select>           
//           <br/>
//           <h2>you are a {this.state.gender}</h2>
//           <br/>
//           <h2>your favorite is {this.state.favColor} </h2>
//         </form>
//       </div>
//     );
//   }
// }

class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       firstName:"",
//       lastName:"",
//       age:0,
//       gender:"",
//       destination:"",
//       dietaryRestrictions:""
//     }

//     this.handleChange=this.handleChange.bind(this)
//     this.handleSubmit=this.handleSubmit.bind(this)
//   }

//   handleChange(event){
//     const{name,value,type,checked}=event.target
//     type==="checkbox"? this.setState({[name]:checked}): this.setState({[name]:value})
//   }

//   handleSubmit(){

//   }

//   render(){
//     return(
//       <main>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
//           <br/>
//           <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
//           <br/>
//           <input type="text" placeholder="Age" value={this.state.age} name="age" onChange={this.handleChange}></input>
//           <br/>
//           <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}></input>Male
//           <br/>
//           <input type="radio" name="gender" value="female" checked={this.state.gender==="female"}  onChange={this.handleChange}></input>Female
//           <br/>
//           <p>Location:</p>
//           <br/>
//           <select name="destination" value={this.state.destination} onChange={this.handleChange}>
//             <option value="">-please cheoose one-</option>
//             <option value="SH">Shanghai</option>
//             <option value="SZ">Shenzhen</option>
//             <option value="BJ">Beijing</option>
//             <option value="HB">Hebei</option>
//           </select> 
//           <br/> 
//           <input type="checkbox" name="dietaryRestrictions" checked={this.state.dietaryRestrictions} onChange={this.handleChange}></input>Dietary Restrictions
//           <br/>
//           <button>Submit</button>
//           <br/>

//           <hr/>

//           <h2>Entered Information:</h2>
//           <br/>
//           <p>Your Name is {this.state.firstName} {this.state.lastName}</p>
//           <p>Your age is {this.state.age}</p>
//           <p>Your gender is {this.state.gender}</p>
//           <p>Your location is {this.state.destination}</p>
//         </form>
//       </main>

     
//     )
//   }

  constructor(){
    super()
    this.state={}
  }

  render(){   
    return(
      <div>
        <Header/>
       <MemeGenerator/>
      </div>
    )
  }
}
export default App;
