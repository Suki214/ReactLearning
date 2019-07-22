import React from "react"

function ContactCard(props){
 // console.log(props)
    return(
        <div className='contact-card'>
          <img src={props.imgURL}/>
          <h3>{props.name}</h3>
          <p>Phone: {props.phone}</p>
          <p>Email: {props.email}</p>      
        </div>
    )
    
}

export default ContactCard

// <div className='contact-card'>
// <img src="http://placekitten.com/300/200"/>
// <h3>Mr.Whiskerson</h3>
// <p>Phone: 12345</p>
// <p>Email: Mr.Whikerson@216.com</p>      
// </div>

// <div className='contact-card'>
// <img src="http://placekitten.com/400/200"/>
// <h3>Mr.Whiskerson1</h3>
// <p>Phone: 123451</p>
// <p>Email: Mr.Whikerson1@216.com</p>      
// </div>

// <div className='contact-card'>
// <img src="http://placekitten.com/400/300"/>
// <h3>Mr.Whiskerson2</h3>
// <p>Phone: 123452</p>
// <p>Email: Mr.Whikerson2@216.com</p>      
// </div>