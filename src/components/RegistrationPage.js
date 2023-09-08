import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/all.css';
import "./res_page.css";



const RegistrationPage = () => {
 
   
    return <>
    <div className="container-fluid">
        <div className="row">
        <div className="col-5 ">
        <img  className="vh-100  w-100 image-fluid " src="images/logo.gif" alt=""/>
        </div>
        <div className="col-7  ">
        <h3 className='text-secondary text-center mt-5'>Create New Account</h3>
     <h6 className='text-secondary  text-center mt-5 '>Already Registered ?<a className='ml-2' href='http://localhost:3000/'>Login</a></h6>
     <form style={{marginLeft:"25%",marginRight:"25%",marginTop:"20px"}} action="" className= ''>
       
        <div className="form-group ">
          <label className='text-start reg_lable ' for="">Please Enter Your Name</label>
          <input type="text" className=" col-sm col-md col-lg rounded-pill  pad-bg form-control " />
        </div>
        <div className="form-group">
          <label className=' reg_lable ' for="">Please Enter Your Email</label>
          <input type="text" className="rounded-pill pad-bg i-box form-control input-lg" />
        </div>
        <div className="form-group">
          <label className=' reg_lable ' for="">Please Enter Your Email</label>
          <input type="text" className="rounded-pill pad-bg i-box form-control input-lg" />
        </div>
        <div className="form-group">
          <label className='text-start  reg_lable ' for="">Please Enter Your Date of Birth</label>
          <input type="text" className="rounded-pill pad-bg reg_input  form-control input-lg" />
        </div>
       
      </form> 
      <div className="d-flex justify-content-center" >
        <button className=" btn  btn-signup mx-5 ">Sign up </button>
       
       
        </div>
        </div>
        </div>
       </div>

   
 

    </>
  }


export default RegistrationPage;
