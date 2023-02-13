import React from 'react';
import "./Table.css";
import TableColor from './TableColor';
export default function IngredientTable() {
  return (
<>
<div className="container mb-2">
  <h3>Ingredient</h3>
  </div>
  <div class="container mb-5">
             <div class="ingredients " style={{width:"100%",height:"auto"}}>
              <div class="container  "> 
               <div class="col-md-12 row">
                <div className='col-md-4 '>
                  <div className='container '>
                    <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" checked/></legend>   

                <div className='col p-2 ing_list_1 pr-2 d-flex  '>
          
                   <span  className="mr-1">Basmati Rice</span  >
                  <span className="" ><select className="form-select1" aria-label="Default select example" >
                         <option selected>select</option>
                         <option value="1">samba</option>
                         <option value="2">raw rice</option>
                         <option value="3">Jeerakasala</option>
                          </select></span  >
                  <span className="ingredients_quantity" >1kg</span  >
                </div>
                </fieldset>
                <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox"/></legend>  
                <div className='col p-2 ing_list_1 pr-2 d-flex  '>
                <span  className="mr-1">chicken</span  >
                  <span className="" ><select className="form-select1" aria-label="Default select example" >
                  <option selected>select</option>
                         <option value="1">Mutton</option>
                         <option value="2">Prawn</option>
                         <option value="3">Fish</option>
                          </select></span  >
                  <span className="ingredients_quantity" >1kg</span  >
                </div>
                </fieldset>
                <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox"/></legend>  
                <div className='col p-2 ing_list_2 pr-2 d-flex'>
                <span className="" >Cloves</span  >
                <span className="" ></span  >
               <span className="ingredients_quantity" >4nos</span  >
                </div>
                </fieldset>
                <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox"/></legend>  

                <div className='col p-2 ing_list_2 pr-2 d-flex'>
                <span className="" >Yogurt</span  >            
               <span className="ingredients_quantity" >1cup</span  >
                </div>
</fieldset>
<fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox"/></legend>  

                <div className='col p-2 ing_list_2 pr-2 d-flex'>
                <span className="" >Ginger Garlic Past</span  >            
               <span className="ingredients_quantity" >2tbs</span  >
                </div>
</fieldset>
                  </div>
                </div>


                <div className='col-md-4 border border-warning border-right-0 border-left-0 border-top-0  border-bottom-0'>
                  <div className='container'>
                  <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                  <div className='col p-2 ing_list_2 pr-2 d-flex'>
                    <span className="" >Garam masala</span>
                    
                    <span className="ingredients_quantity" >1tb</span  >
                  </div>
                  </fieldset>
                  <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                  <div className='col p-2 ing_list_2 pr-2 d-flex'>

                    <span className="" >chilli powder</span >
                    
                    <span className="ingredients_quantity" >2tbs</span >
                  </div>
                  </fieldset>

                  <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                <div className='col p-2 ing_list_2 pr-2 d-flex'>

                  <span className="" >Turmaric</span>
                
                  <span className="ingredients_quantity" >1ts</span  >
                </div>
                </fieldset>

                <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                <div className='col p-2 ing_list_2 pr-2 d-flex'>

                  <span className="" >bayleaf</span>
                  
                  <span className="ingredients_quantity" >4nos</span  >
                </div>
</fieldset>
<fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                <div className='col p-2 ing_list_2 pr-2 d-flex'>

                  <span className="" >Green Cardamom</span>
                  
                  <span className="ingredients_quantity" >4nos</span  >
                </div>
</fieldset>
                
                  </div>
                </div>


                <div className='col-md-4 border border-warning border-right-0 border-left-0 border-top-0 border-bottom-0'>
                <div className='container'>
                <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                <div className='col p-2 ing_list_2 pr-2 d-flex'>

                  <span className="" >Large Onion</span  >
                 
                  <span className="ingredients_quantity" >1nos</span  >
                </div>
                </fieldset>
                <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                <div className='col p-2 ing_list_2 pr-2 d-flex'>

                  <span className="" >Ment Leaf</span  >
                  
                  <span className="ingredients_quantity" >1cup</span  >
                </div>
                </fieldset>
                <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                <div className='col p-2 ing_list_3 pr-2 d-flex'>

                 <span className ="" >Saffron</span  >
              
                  <span className="ingredients_quantity" >1pin</span >
                </div>
                </fieldset>
                <fieldset className='border border-white'>
     <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>   
                <div className='col p-2 ing_list_3 pr-2 d-flex'>

                   <span className="" >Lemon Juice</span >                 
                   <span className="ingredients_quantity" >1tbs</span  >
                 </div>
                 </fieldset>

                    </div>
                </div>



  </div>
  </div>
<TableColor/>
  </div>
               </div>



</>
   

      
      

  );
}