import React from 'react';




export default function AddStep() {
  return (
<>

<div class="container mt-2">
  <h3>Add steps/Tips</h3>

  </div>
<div class="container mt-3">
     <div class="d-flex justify-content-between  mb-1">
         <div class=" col-lg-9 col-md-9 col-sm-6 ">
            <input type="textarea" class="form-control mb-2 mr-sm-2 Swappable-input p-5  " placeholder="Add Steps" id="email"/>
         </div>
         <div class="col-lg-4 col-md-4 col-sm-4 p-5">
           <button class="btn btn-secondary btn-sm mr-2 ">Steps</button>
           <button class="btn btn-secondary btn-sm">Add</button>
         </div>
      </div>
     </div>

</>
    
    
  );
}