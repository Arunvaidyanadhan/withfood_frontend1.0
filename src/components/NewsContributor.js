import React from 'react';
import './css/News.css';

export default function NewsContributor() {
  return (
    <>
    <div className="container">
      <div className="row d-flex justify-content-around ">
        <div className="col-sm-12 col-md-6 col-lg-6 my-2   ">
          <div id="Newsletter" className="user ">
            <h3 className="text-center m-3">Sign Up for News letter</h3>
            <div className="input-group  justify-content-center">
              <input className="form-control form-control-lg ml-2 mr-2" type="text" value=""/>              
            </div>
            <div className="input-prepend  ">
              <div className="text-center m-3">                   
                    <button  id="contributorbtn"  className="btn btn-lg " type="button" href="#"><b>Subscribe</b></button>
                 </div>
                 </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 my-2">
           <div data-role="page" id="contributor" className="user" >  
            <div className="clearfix" >
           <p className=" float-left align-items-start text-white text-center m-5">we got recipe on you own</p> 
           </div>
            <div className="text-center">
            <button  id="contributorbtn"  className="btn btn-lg " type="button" href="#"><b>Become a contributor</b></button>
          </div>
           <div className="clearfix" >
           <p className="clear-flex float-right  text-white  m-5">Let the world test it too</p> 
           </div>  
          
           </div>

      </div>
     </div>
 </div>


  </>

   

   
  );
}