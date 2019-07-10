import React, { Component } from 'react'; 

//Stateless Functional Component
//props need to pass in as a parameter
const NavBar=({totalCounters})=>{
  return ( 
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
   );
};

// class NavBar extends Component {
//   render() { 
// //     return ( 
// //       <nav className="navbar navbar-light bg-light">
// //   <a className="navbar-brand" href="#">
// //     Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
// //   </a>
// // </nav>
// //      );
//   }
// }
 
export default NavBar;
