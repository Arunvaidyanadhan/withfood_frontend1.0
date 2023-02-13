import React from 'react';

import "./RecDetail.css"

export default function RecipeDetail() {
  const recipeName ={
    display:"flex",
    flexWrap: "wrap",
    fontWeight:"bold"

  }
  
  return (
<> 
<div style={recipeName} className='container '>
<div className="mb-2">
  <label  className='mr-2'>Recipe Name</label>
  </div>
  <div >
  <input style={{width:"600px" }} className=" form-control mb-2"  type="text"/>
  </div>
  <div className=" ml-3 mb-2">
  <label className='mr-2 mb-2'>Duration</label>
  </div>
  <div className="">
  <input style={{width:"400px"}} className="form-control "  type="text"/>
 
  </div>
  <div> <span className='ml-2'>Min</span>
  </div>
  <div className="">
  <label  className='mr-2 '>Cuisine</label>
  </div>
  <div >
  <input style={{width:"600px" }} className=" form-control"  type="text"/>
  </div>
  <div className="">
  <label  className='mr-2  pl-2'>Course</label>
  </div>
  <div className=" ml-3">
  <select class="form-select" aria-label="Default select example">
  <option selected>Main Course</option>
    <option value="volvo">Side Dish</option>
    <option value="fiat">Dessert</option>
    <option value="audi">Snack</option>
</select>
</div>
<div className="">
  <label  className='mr-2 pl-2'>Type</label>
  </div>
  <div className=" ml-3">
  <select class="form-select" aria-label="Default select example">
  <option selected>Vegetarian</option>
    <option value="volvo">Non-Veg</option>
    <option value="fiat">Vegan</option>
</select>
</div>
</div>

</>
    
  );
}