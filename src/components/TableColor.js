import React from 'react';



export default function TableColor() {
  return (

    
    <>
    <div className="container ingredients_color_code">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-2 ">                
                <div className="row ">                  
                  <div className="col-2  ">
                    <p className="switch_the_indredient"></p></div>
                  <div className="col-2 switch_text1">                    
                    <p className="switch_text3 ">Switch The Indredient</p>
                  </div>
                                    <div className="col-2 "><p className="must_have_ingredient"></p></div>
                  <div className="col-2 ">                    
                    <p className="switch_text3">Must Have Ingredient</p>
                  </div>

                  <div className="col-2"><p className="optional_ingredient"></p></div>
                  <div className="col-2 ">                    
                    <p className=" switch_text3">Optional Ingredient</p>
                  </div>

                
              </div>
              </div>
            </div>
    </>
  );
}