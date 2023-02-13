import React from 'react';

import "./Swappable.css"



export default function SwappableIngredients() {
  return (
<> 
<div className="container">
      <div className="row">
        <div className="col-lg-6">
        <fieldset className="box border border-warning p-2">
    <legend className="float-none w-auto p-2">Swappable Ingredients</legend>
    <form className="form-inline" action="/action_page.php">
  <label for="email" class="mr-sm-2"></label>
  <input type="email" class="form-control form-control-lg mb-2 mr-sm-2 p-5 Swappable-input col-3 " placeholder="Ingredients" id="email"/>
  <label for="pwd" class="mr-sm-2"></label>
  <input type="text" class="form-control mb-2 mr-sm-2 ml-2 col-2" placeholder="quantity" id="pwd"/>
  <label for="pwd" class="mr-sm-2"></label>
   <select name="cars" class="custom-select  col-2 mr-sm-2 ml-2">
    <option selected>Kg</option>
    <option value="volvo">Grams</option>
    <option value="fiat">Cup</option>
    <option value="audi">Nos</option>
    <option value="audi">Pieces</option>
    <option value="audi">Ml</option>
    

  </select>
  <button class="btn btn-secondary btn-sm ml-2  col"><span class="fas fa-plus-square"></span></button>
  
</form>
<form class="form-inline mt-3" action="/action_page.php">
  <label for="email" class="mr-sm-2"></label>
 <select name="cars" class="custom-select  col-5 mr-sm-2 ml-2">
    <option selected>Chicken</option>
    <option value="volvo">Mutton</option>
    <option value="fiat">Fish</option>
    <option value="audi">Prawn</option>
     <option value="audi">Egg</option>
  </select> 
  <button class="btn btn-secondary btn-sm mr-2  ml-2"><span class="fas fa-window-close"></span></button>
  <button class="btn btn-secondary btn-sm  ml-2"><span class="fas fa-pencil-alt"></span></button>
  
</form> 

  

</fieldset>
 
</div>
<div className="col-lg-6">
        <fieldset className="border border-warning p-2">
    <legend className="float-none w-auto  p-2">Other Ingredients</legend>
    <form class="form-inline" action="/action_page.php">
  <label for="email" class="mr-sm-2"></label>
  <input type="email" class="form-control form-control-lg p-5 mb-2 mr-sm-2 Swappable-input col-3 " placeholder="Ingredients" id="email"/>
  <label for="pwd" class="mr-sm-2"></label>
  <input type="text" class="form-control mb-2 ml-2 mr-sm-2 col-2" placeholder="quantity" id="pwd"/>
  <label for="pwd" class="mr-sm-2"></label>
  <select name="cars" class="custom-select  col-2 mr-sm-2 ml-2">
    <option selected>kg</option>
    <option value="volvo">cup</option>
    <option value="fiat">grams</option>
    <option value="audi">Nos</option>
  </select>
  <button class="btn btn-secondary btn-sm ml-2"><span class="fas fa-plus-square"></span></button>
  
</form>
<h6>optional</h6>
<div class="d-flex justify-content-between  mb-1">
    <div class="p-1 ">
     <form class="form-inline" action="/action_page.php">
  <input class="checkbox" type="checkbox"/>
  <p class="lead ">Tomato</p>
</form>
    </div>
    
    <div class="p-1 ">
      

    </div>
    <div class="p-1 ">
      <span class=" lead fs-5"><b>1cup</b></span>
      <button class="btn btn-secondary btn-sm ml-2 "><span class="fas fa-window-close"></span></button>
    </div>
  </div>
  <div class="d-flex justify-content-between  mb-1">
    <div class="p-2 ">
     <form class="form-inline" action="/action_page.php">
  <input class="checkbox" type="checkbox"/>
  <p class="lead">onion</p>
</form>
    </div>
    
    <div class="p-1 ">
      
    </div>
    <div class="p-1 ">
      <span class=" lead fs-5"><b>1cup</b></span>
      <button class="btn btn-secondary btn-sm ml-2 "><span class="fas fa-window-close"></span></button>
    </div>
  </div>
  <div class="d-flex justify-content-between  mb-1">
    <div class="p-2 ">
     <form class="form-inline" action="/action_page.php">
  <input class="checkbox" type="checkbox"/>
  <p class="lead text-secoandary">Coriander </p>
</form>
    </div>
    
    <div class="p-1 ">
      
    </div>
    <div class="p-1 ">
      <span class=" lead fs-5"><b>5 pinch</b></span>
      <button class="btn btn-secondary btn-sm ml-2 "><span class="fas fa-window-close"></span></button>
    </div>
  </div>
</fieldset>
 
</div>
</div>
</div>

</>
    
  );
}