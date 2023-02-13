import React from 'react';
import "./Table.css";



export default function ExpertTips() {
  return (
<>
<div className="container mt-3">
          <div className="header">
            <h3 className="">Expert Tips</h3>
          </div>
        </div>
        <div className="container">
            <div className="Expert_Tips mt-3 p-3" style={{width:"100%",height:"auto"}}>
              <span className="fas fa-gem"  style={{fontSize:"45px",color:"#fae564"}}></span>                                  
                  <span className=" ml-3">Cut the chicken along the bone, keeping the bone in. So one half will have no bone, the other will have the bone.</span>  
            </div>
            <div className="Expert_Tips mt-3 p-3" style={{width:"100%",height:"auto"}}>
              <span className="fas fa-gem" style={{fontSize:"45px",color:"#fae564"}}></span>                                  
                  <span className=" ml-3">Leftovers keep well for 3 to 4 days in the fridge. Reheat in microwave.</span>  
            </div>
          </div>
</>
    
    
  );
}