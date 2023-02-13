import React from 'react';


export default function RecipeHeading() {
  return (
<>
<div className="container ">
          <h1 className="text-center recipeheading ">Chicken Biryani</h1> 
        </div>

                  <div className="container">                
          <div className="row justify-content-center " >
          <div className="col-2">  
          <span className="text menudetail1"style={{fontSize:"15px", color:" #ff5500"}}><img className="img-fluid" src="images/cuisine.png" alt="asian_cusine" style={{width:"60px",height:"auto"}}/><b>South Asian</b></span>  
          </div> 
          <div className="col-2"> 
          <span className="text menudetail1" style={{fontSize:"15px", color:" #ff5500"}}><img className="img-fluid" src="images/course_480.png" alt="asian_cusine" style={{width:"60px",height:"auto"}}/><b>Main Course</b></span>
        </div>
        <div className="col-2">                      
         <span className="text menudetail1" style={{fontSize:"15px", color:" #ff5500"}}><img className="img-fluid" src="images/time.png" alt="time-dur"style={{width:"60px",height:"auto"}}/><b>60 Min</b></span>
         </div>
         <div className="col-2">        
                 
         <span className="text menudetail1" style={{fontSize:"15px", color:" #ff5500"}} ><img className="img-fluid" src="images/diet.png" alt="asian_cusine" style={{width:"60px",height:"auto"}}/><b>Non-Veg</b></span>
       </div>
         <div className="col-2 mt-2"> 
             
         <span style={{ color:" #ff5500"}}  className="text menudetail1 " ><i   style={{fontSize:"40px", color:" #ffdb00"}}class="fa-solid fa-heart"></i><b> 12,030</b></span>
       </div>
            </div>
          </div>        
         
</>
    
  );
}