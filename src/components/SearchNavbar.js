import React from 'react';
import './css/search.css';
export default function SearchNavbar() {
  return (
<>
<nav className="navbar navbar-expand-sm  mb-3">
           <a className="navbar-brand p-2 " href="#">
    <img src="images/logo.gif" alt="Logo" style={{width:"150px"}}/>
  </a>
  <div className="input-group mb-3 inputsearch">
    <input type="text" className="form-control my-4 p-4" placeholder="Search Recipe"/>
    <div className="input-group-append">
     <button className="btn btn-rounded text-white btn-lg my-4 pr-2 searchbtn" type="button"><b>Search</b></button> 
    </div>
  </div>
  <ul className="navbar-nav mr-5  ">
    <li className="nav-item"><a className="nav-link blog " href="#"><b>Blog</b></a></li>
                <li className="nav-item"><a className="nav-link" href="#"><b>Login/Register</b></a></li>
    
  </ul>
</nav>
</>
    
   

      
      

  );
}