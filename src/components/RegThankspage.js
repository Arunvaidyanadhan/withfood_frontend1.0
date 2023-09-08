import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const RegThankspage = () => {

    return <>
      <div className="container text-center position-absolute top-50 start-50 translate-middle ">
        <img style={{ width: "500px" }} src="images/logo.gif" className="thanks_logo  mb-4" alt="..." />
        <h1 className='display-1'>Thanks for registration!</h1>
        <p className='thanks_para'>we have send you a verification Email at hello@reallyagreatsite.com </p>
      </div>

    </>
  
}
export default RegThankspage;