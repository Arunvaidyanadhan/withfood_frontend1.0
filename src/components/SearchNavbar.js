import React from 'react';
import './css/search.css';
import { useNavigate } from 'react-router-dom';

export default function SearchNavbar() {

  const navigate = useNavigate();
  const registrationPage = () => {
    // route to contributorPage  

    navigate('/RegistrationPage');
  };
  return (
<>


<nav className="navbar navbar-expand-sm  mb-3">
           <a className="navbar-brand p-2 " href="http://localhost:3000/ContributorPage">
    <img src="images/logo.gif" alt="Logo" style={{width:"150px"}}/>
  </a>
  <div className="input-group mb-3 inputsearch">
    <input type="text" className="form-control my-4 p-4" placeholder="Search Recipe"/>
    <div className="input-group-append">
     <button className="btn btn-rounded text-white btn-lg my-4 pr-2 searchbtn" type="button"><b>Search</b></button> 
    </div>
  </div>
  <ul className="navbar-nav mr-5  ">
    <li className="nav-item"><a className="nav-link blog " href="http://localhost:3000/ContributorPage"><b>Blog</b></a></li>
                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/ContributorPage" onClick={() => registrationPage()}><b>Login/Register</b></a></li>
    
  </ul>
</nav>
</>
    
   

      
      

  );
}