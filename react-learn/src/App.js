import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard'

class App extends Component {
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
        />
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
        </div> */}        
      </div>
    );
  } 
}

export default App;
