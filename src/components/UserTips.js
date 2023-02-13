import React from 'react';



export default function UserTips() {
  return (

    <>
    <div className="container mt-2">
  <h3>Tips</h3>
  </div>
<div className="container mt-3">
     <div className="d-flex justify-content-between  mb-1">
         <div className=" col-lg-9 col-md-9 col-sm-6 ">
          <p className="step1 text-dark p-3">cut Big pic of chicken wash an marinate the chicken for one hover </p>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4 p-2">
           <button className="btn btn-secondary btn-sm mr-2 "><span className="fas fa-window-close"></span></button>
           <button className="btn btn-secondary btn-sm  ml-2"><span className="fas fa-pencil-alt"></span></button>
         </div>
      </div>
     </div>
     <div className="container">
      <p className="text-left text-dark">By clicking your are conforming that the recipe you submitting in your own and not copied or licensed fully or partially from someone or a company.you agree that non-compliance will result in removal of recipe and repeat offense will result in disableing of you account </p>
      <p className="text-left"></p>
      <div className="text-center">
      <button className="btn submit-btn"><span className="far fa-save"> Submit</span></button>
    </div>
     </div>

    


    
    </>
    
  );
}