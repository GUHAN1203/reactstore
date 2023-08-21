import React from 'react'
import { useState } from 'react';
import { DisplayData } from '../../../components/Data/Displaydata';
import { Link } from 'react-router-dom';

function Display() {
  
  const [displayData,setDisplayData]=useState([...DisplayData]);
  
  return (
    displayData.map((item,index)=>{
      return(
        
        <>
        <Link to={`/display-details/${item.id}`} >
        
                  <div className="col" style={{textDecoration:'none'}}>
                  
                    <div className=" card rounded-0 border-white ">
                      <img src={item.imgUrl} />

                      <div className="card-body bg-white ">
                        <p className="card-header bg-white"><b>{item.name}</b></p>
                        <p> {item.color}</p>
                        <div className="d-grid gap-2 col-12 mx-auto">
                          <a href="phonemodel.html" ><button className="btn btn-dark rounded-0" type="button" >Buy</button></a>
                        </div>
                        <div className="d- justify-content-between align-items-center ">
                          <div className="btn-group">
                            
                          </div>
                          
                          <small className="text-decoration-line-through text-secondary" >{item.rate}</small>
                          <small className="text-black text-primary">{item.offPrice}</small>
                        </div>
                      </div>
                    </div>
                    
                  </div>  
                  
    </Link>

</>
    
      
      )
        
    }) 
)}


export default  Display 

